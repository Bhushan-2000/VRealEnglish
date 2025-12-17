import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AiCoachPageComponent } from './ai-coach-page.component';

@NgModule({
  declarations: [AiCoachPageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AiCoachPageComponent }])]
})
export class AiCoachModule {}