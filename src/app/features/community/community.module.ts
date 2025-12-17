import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommunityPageComponent } from './community-page.component';

const routes: Routes = [
  { path: '', component: CommunityPageComponent }
];

@NgModule({
  declarations: [
    CommunityPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CommunityModule { }
