import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AdminPageComponent }])]
})
export class AdminModule {}