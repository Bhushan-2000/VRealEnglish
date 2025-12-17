import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WalletPageComponent } from './wallet-page.component';

@NgModule({
  declarations: [WalletPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: WalletPageComponent }])
  ]
})
export class WalletModule {}