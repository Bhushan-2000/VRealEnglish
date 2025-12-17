import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Module360PageComponent } from './module360-page.component';

@NgModule({
  declarations: [Module360PageComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: Module360PageComponent }])]
})
export class Module360Module {}