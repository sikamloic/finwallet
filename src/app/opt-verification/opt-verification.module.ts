import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptVerificationPageRoutingModule } from './opt-verification-routing.module';

import { OptVerificationPage } from './opt-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptVerificationPageRoutingModule
  ],
  declarations: [OptVerificationPage]
})
export class OptVerificationPageModule {}
