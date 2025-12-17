import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RecordingResult {
  blob: Blob;
  durationMs: number;
  mimeType: string;
}

@Injectable({ providedIn: 'root' })
export class RecordingService {
  private mediaRecorder?: MediaRecorder;
  private chunks: BlobPart[] = [];
  private startTime?: number;

  startRecording(): Promise<void> {
    return navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.chunks = [];
        this.startTime = Date.now();
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            this.chunks.push(e.data);
          }
        };
        this.mediaRecorder.start();
      });
  }

  stopRecording(): Promise<RecordingResult> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('No active recording'));
        return;
      }

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: this.mediaRecorder?.mimeType || 'audio/webm' });
        const durationMs = this.startTime ? Date.now() - this.startTime : 0;
        // Stop tracks
        this.mediaRecorder?.stream.getTracks().forEach(t => t.stop());
        resolve({ blob, durationMs, mimeType: blob.type });
        this.cleanup();
      };

      this.mediaRecorder.stop();
    });
  }

  cancel(): void {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.getTracks().forEach(t => t.stop());
    }
    this.cleanup();
  }

  private cleanup(): void {
    this.mediaRecorder = undefined;
    this.chunks = [];
    this.startTime = undefined;
  }
}