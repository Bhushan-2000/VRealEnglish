import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LivePageComponent } from './live-page.component';

@NgModule({
  declarations: [LivePageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: LivePageComponent }])]
})
export class LiveModule {}