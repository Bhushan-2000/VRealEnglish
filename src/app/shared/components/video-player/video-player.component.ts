import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

export type VideoType = 'youtube' | 'hls' | 'local360';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  standalone: false
})
export class VideoPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() src!: string;
  @Input() type: VideoType = 'youtube';
  @Input() poster?: string;
  @Input() autoplay = true;
  @Input() muted = true;
  @Input() lazyLoad = true;

  @ViewChild('videoContainer', { static: true }) videoContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('playButton', { static: true }) playButton!: ElementRef<HTMLButtonElement>;

  isVisible = false;
  isPlaying = false;
  isPlayerReady = false;
  player: any;
  observer?: IntersectionObserver;

  ngOnInit(): void {
    if (this.lazyLoad) {
      this.setupIntersectionObserver();
    } else {
      this.initializePlayer();
    }
  }

  ngAfterViewInit(): void {
    if (!this.lazyLoad) {
      this.initializePlayer();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.destroyPlayer();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const isCurrentlyVisible = entry.isIntersecting;
          
          if (isCurrentlyVisible && !this.isVisible) {
            this.isVisible = true;
            this.initializePlayer();
          } else if (!isCurrentlyVisible && this.isVisible) {
            this.isVisible = false;
            if (this.isPlaying) {
              this.pauseVideo();
            }
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '50px'
      }
    );

    this.observer.observe(this.videoContainer.nativeElement);
  }

  private initializePlayer(): void {
    if (this.isPlayerReady) return;

    switch (this.type) {
      case 'youtube':
        this.initYouTubePlayer();
        break;
      case 'hls':
        this.initHLSPlayer();
        break;
      case 'local360':
        this.init360Player();
        break;
    }
  }

  private initYouTubePlayer(): void {
    if (!this.src) return;

    const videoId = this.extractYouTubeVideoId(this.src);
    if (!videoId) return;

    // Use YouTube Embed API
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=${this.autoplay ? 1 : 0}&mute=${this.muted ? 1 : 0}&rel=0&modestbranding=1`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    this.videoContainer.nativeElement.innerHTML = '';
    this.videoContainer.nativeElement.appendChild(iframe);
    this.isPlayerReady = true;

    if (this.autoplay && this.isVisible) {
      setTimeout(() => this.playVideo(), 1000);
    }
  }

  private initHLSPlayer(): void {
    const video = document.createElement('video');
    video.controls = true;
    video.muted = this.muted;
    video.autoplay = this.autoplay;
    video.poster = this.poster || '';
    video.style.width = '100%';
    video.style.height = '100%';

    if (this.src.includes('.m3u8')) {
      // HLS support would require hls.js library
      video.src = this.src;
    } else {
      video.src = this.src;
    }

    this.videoContainer.nativeElement.innerHTML = '';
    this.videoContainer.nativeElement.appendChild(video);
    this.player = video;
    this.isPlayerReady = true;

    video.addEventListener('play', () => this.onPlay());
    video.addEventListener('pause', () => this.onPause());
  }

  private init360Player(): void {
    // 360 player would be implemented with panolens + three.js
    // For now, fallback to regular video
    this.initHLSPlayer();
  }

  private extractYouTubeVideoId(url: string): string | null {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  playVideo(): void {
    if (this.type === 'youtube') {
      // YouTube API play would go here
      this.isPlaying = true;
      this.onPlay();
    } else if (this.player) {
      this.player.play();
    }
  }

  pauseVideo(): void {
    if (this.type === 'youtube') {
      // YouTube API pause would go here
      this.isPlaying = false;
      this.onPause();
    } else if (this.player) {
      this.player.pause();
    }
  }

  onPlayButtonClick(): void {
    if (this.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  }

  private onPlay(): void {
    this.isPlaying = true;
    // Emit play event
  }

  private onPause(): void {
    this.isPlaying = false;
    // Emit pause event
  }

  private destroyPlayer(): void {
    if (this.player) {
      this.player.pause();
      this.player = null;
    }
    this.isPlayerReady = false;
    this.isPlaying = false;
  }
}