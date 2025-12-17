import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomsPageComponent } from './rooms-page.component';

@NgModule({
  declarations: [RoomsPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: RoomsPageComponent }])]
})
export class RoomsModule {}