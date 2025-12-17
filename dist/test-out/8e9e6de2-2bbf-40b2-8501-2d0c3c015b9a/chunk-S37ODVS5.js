import {
  Component,
  Input,
  ViewChild,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-EI44HNNH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/shared/components/video-player/video-player.component.html
var video_player_component_default;
var init_video_player_component = __esm({
  "angular:jit:template:src/app/shared/components/video-player/video-player.component.html"() {
    video_player_component_default = `<div class="video-player" #videoContainer>
  <div class="video-container" [class.playing]="isPlaying">
    <!-- Video content will be injected here -->
    
    <!-- Play overlay button -->
    <button 
      #playButton
      class="play-button"
      [class.hidden]="isPlaying || type === 'youtube'"
      (click)="onPlayButtonClick()"
      aria-label="Play video">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 5v14l11-7z" fill="currentColor"/>
      </svg>
    </button>

    <!-- Loading indicator -->
    <div class="loading-indicator" [class.hidden]="isPlayerReady">
      <div class="spinner"></div>
    </div>
  </div>
</div>`;
  }
});

// angular:jit:style:src/app/shared/components/video-player/video-player.component.css
var video_player_component_default2;
var init_video_player_component2 = __esm({
  "angular:jit:style:src/app/shared/components/video-player/video-player.component.css"() {
    video_player_component_default2 = "/* src/app/shared/components/video-player/video-player.component.css */\n.video-player {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: #000;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.video-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.play-button {\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(11, 110, 255, 0.85);\n  border: none;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background .3s;\n}\n.play-button:hover {\n  background: #0B6EFF;\n}\n.play-button.hidden {\n  display: none;\n}\n.loading-indicator {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.4);\n}\n.loading-indicator.hidden {\n  display: none;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #00C28A;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 600px) {\n  .video-player {\n    aspect-ratio: 16 / 9;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=video-player.component.css.map */\n";
  }
});

// src/app/shared/components/video-player/video-player.component.ts
var VideoPlayerComponent;
var init_video_player_component3 = __esm({
  "src/app/shared/components/video-player/video-player.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_video_player_component();
    init_video_player_component2();
    init_core();
    VideoPlayerComponent = class VideoPlayerComponent2 {
      src;
      type = "youtube";
      poster;
      autoplay = true;
      muted = true;
      lazyLoad = true;
      videoContainer;
      playButton;
      isVisible = false;
      isPlaying = false;
      isPlayerReady = false;
      player;
      observer;
      ngOnInit() {
        if (this.lazyLoad) {
          this.setupIntersectionObserver();
        } else {
          this.initializePlayer();
        }
      }
      ngAfterViewInit() {
        if (!this.lazyLoad) {
          this.initializePlayer();
        }
      }
      ngOnDestroy() {
        if (this.observer) {
          this.observer.disconnect();
        }
        this.destroyPlayer();
      }
      setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
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
        }, {
          threshold: 0.5,
          rootMargin: "50px"
        });
        this.observer.observe(this.videoContainer.nativeElement);
      }
      initializePlayer() {
        if (this.isPlayerReady)
          return;
        switch (this.type) {
          case "youtube":
            this.initYouTubePlayer();
            break;
          case "hls":
            this.initHLSPlayer();
            break;
          case "local360":
            this.init360Player();
            break;
        }
      }
      initYouTubePlayer() {
        if (!this.src)
          return;
        const videoId = this.extractYouTubeVideoId(this.src);
        if (!videoId)
          return;
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=${this.autoplay ? 1 : 0}&mute=${this.muted ? 1 : 0}&rel=0&modestbranding=1`;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        this.videoContainer.nativeElement.innerHTML = "";
        this.videoContainer.nativeElement.appendChild(iframe);
        this.isPlayerReady = true;
        if (this.autoplay && this.isVisible) {
          setTimeout(() => this.playVideo(), 1e3);
        }
      }
      initHLSPlayer() {
        const video = document.createElement("video");
        video.controls = true;
        video.muted = this.muted;
        video.autoplay = this.autoplay;
        video.poster = this.poster || "";
        video.style.width = "100%";
        video.style.height = "100%";
        if (this.src.includes(".m3u8")) {
          video.src = this.src;
        } else {
          video.src = this.src;
        }
        this.videoContainer.nativeElement.innerHTML = "";
        this.videoContainer.nativeElement.appendChild(video);
        this.player = video;
        this.isPlayerReady = true;
        video.addEventListener("play", () => this.onPlay());
        video.addEventListener("pause", () => this.onPause());
      }
      init360Player() {
        this.initHLSPlayer();
      }
      extractYouTubeVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      }
      playVideo() {
        if (this.type === "youtube") {
          this.isPlaying = true;
          this.onPlay();
        } else if (this.player) {
          this.player.play();
        }
      }
      pauseVideo() {
        if (this.type === "youtube") {
          this.isPlaying = false;
          this.onPause();
        } else if (this.player) {
          this.player.pause();
        }
      }
      onPlayButtonClick() {
        if (this.isPlaying) {
          this.pauseVideo();
        } else {
          this.playVideo();
        }
      }
      onPlay() {
        this.isPlaying = true;
      }
      onPause() {
        this.isPlaying = false;
      }
      destroyPlayer() {
        if (this.player) {
          this.player.pause();
          this.player = null;
        }
        this.isPlayerReady = false;
        this.isPlaying = false;
      }
      static propDecorators = {
        src: [{ type: Input }],
        type: [{ type: Input }],
        poster: [{ type: Input }],
        autoplay: [{ type: Input }],
        muted: [{ type: Input }],
        lazyLoad: [{ type: Input }],
        videoContainer: [{ type: ViewChild, args: ["videoContainer", { static: true }] }],
        playButton: [{ type: ViewChild, args: ["playButton", { static: true }] }]
      };
    };
    VideoPlayerComponent = __decorate([
      Component({
        selector: "app-video-player",
        template: video_player_component_default,
        standalone: false,
        styles: [video_player_component_default2]
      })
    ], VideoPlayerComponent);
  }
});

export {
  VideoPlayerComponent,
  init_video_player_component3 as init_video_player_component
};
//# sourceMappingURL=chunk-S37ODVS5.js.map
