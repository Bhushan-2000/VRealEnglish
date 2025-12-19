import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild([{ path: '', component: ProfilePageComponent }])
  ],
  providers: [DatePipe, DecimalPipe]
})
export class ProfileModule {}