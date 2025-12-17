import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

@NgModule({
  declarations: [NavbarComponent, VideoPlayerComponent, ToastContainerComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, VideoPlayerComponent, ToastContainerComponent]
})
export class SharedModule {}