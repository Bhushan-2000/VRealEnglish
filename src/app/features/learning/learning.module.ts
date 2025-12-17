import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LearningPageComponent } from './learning-page.component';
import { LessonDetailComponent } from './lesson-detail.component';

const routes: Routes = [
  { path: '', component: LearningPageComponent },
  { path: ':id', component: LessonDetailComponent }
];

@NgModule({
  declarations: [
    LearningPageComponent,
    LessonDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LearningModule { }
