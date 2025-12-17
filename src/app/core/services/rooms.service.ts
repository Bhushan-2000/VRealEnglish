import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Room {
  id: string;
  title: string;
  mentor: string;
  participants: number;
  maxParticipants: number;
  scheduledTime: string;
  status: 'scheduled' | 'live' | 'ended';
  description?: string;
  tags?: string[];
}

export interface JoinRoomResponse {
  roomId: string;
  joinUrl: string;
  webrtcConfig?: RTCConfiguration;
}

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  private roomsSubject = new BehaviorSubject<Room[]>([]);
  rooms$ = this.roomsSubject.asObservable();

  constructor() {
    this.initializeMockRooms();
    this.startParticipantUpdater();
  }

  private initializeMockRooms(): void {
    const mockRooms: Room[] = [
      {
        id: 'room-1',
        title: 'Business English Practice',
        mentor: 'Sarah Johnson',
        participants: 12,
        maxParticipants: 15,
        scheduledTime: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
        status: 'scheduled',
        description: 'Practice professional communication skills in a supportive environment',
        tags: ['business', 'professional', 'intermediate']
      },
      {
        id: 'room-2',
        title: 'Conversation Club - Travel English',
        mentor: 'Mike Chen',
        participants: 8,
        maxParticipants: 10,
        scheduledTime: new Date().toISOString(),
        status: 'live',
        description: 'Learn essential phrases for traveling and tourism',
        tags: ['travel', 'conversation', 'beginner']
      },
      {
        id: 'room-3',
        title: 'Job Interview Preparation',
        mentor: 'Emma Wilson',
        participants: 15,
        maxParticipants: 20,
        scheduledTime: new Date(Date.now() + 7200000).toISOString(), // 2 hours from now
        status: 'scheduled',
        description: 'Master the art of English job interviews with real-world scenarios',
        tags: ['interview', 'career', 'advanced']
      }
    ];

    this.roomsSubject.next(mockRooms);
  }

  private startParticipantUpdater(): void {
    interval(5000).pipe(
      startWith(0)
    ).subscribe(() => {
      const rooms = this.roomsSubject.value;
      const updatedRooms = rooms.map(room => ({
        ...room,
        participants: this.simulateParticipantChange(room)
      }));
      this.roomsSubject.next(updatedRooms);
    });
  }

  private simulateParticipantChange(room: Room): number {
    if (room.status === 'live') {
      // Randomly add/remove 1-2 participants for live rooms
      const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
      const newCount = Math.max(0, Math.min(room.maxParticipants, room.participants + change));
      return newCount;
    }
    return room.participants;
  }

  getRooms(): Observable<Room[]> {
    return this.rooms$;
  }

  getRoomById(id: string): Observable<Room | undefined> {
    return this.rooms$.pipe(
      map(rooms => rooms.find(room => room.id === id))
    );
  }

  joinRoom(roomId: string): Observable<JoinRoomResponse> {
    // TODO: Implement WebRTC connection logic
    // TODO: Request microphone permissions
    // TODO: Initialize peer connection with STUN/TURN servers
    
    console.log(`Joining room: ${roomId}`);
    
    // Mock response - replace with actual WebRTC setup
    const response: JoinRoomResponse = {
      roomId,
      joinUrl: `https://meet.vreal.com/room/${roomId}`,
      webrtcConfig: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          // TODO: Add TURN servers for production
        ]
      }
    };

    return of(response);
  }

  leaveRoom(roomId: string): Observable<void> {
    // TODO: Cleanup WebRTC connections
    // TODO: Update participant count
    console.log(`Leaving room: ${roomId}`);
    return of(void 0);
  }

  checkMicrophone(): Observable<boolean> {
    // Check if microphone is available and get permission
    return new Observable(observer => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        observer.next(false);
        observer.complete();
        return;
      }

      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          // Stop the stream immediately after getting permission
          stream.getTracks().forEach(track => track.stop());
          observer.next(true);
          observer.complete();
        })
        .catch(error => {
          console.error('Microphone access denied:', error);
          observer.next(false);
          observer.complete();
        });
    });
  }

  // WebRTC integration stubs - implement with your preferred WebRTC library
  /*
  TODO: Implement WebRTC functionality
  
  1. Initialize peer connections:
     - Use RTCPeerConnection with proper STUN/TURN servers
     - Handle ICE candidate exchange
     - Manage offer/answer negotiation
  
  2. Audio streaming:
     - Capture user microphone with getUserMedia
     - Add audio tracks to peer connection
     - Handle audio muting/unmuting
  
  3. Socket.IO integration:
     - Connect to signaling server
     - Handle room joining/leaving events
     - Exchange WebRTC signaling messages
     - Sync participant list
  
  4. Error handling:
     - Connection failures
     - Audio device errors
     - Network interruptions
  
  Example integration points:
  - this.socketService.joinRoom(roomId)
  - this.webrtcService.createPeerConnection()
  - this.audioService.startCapture()
  */
}