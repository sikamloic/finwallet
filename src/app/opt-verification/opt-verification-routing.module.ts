import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptVerificationPage } from './opt-verification.page';

const routes: Routes = [
  {
    path: '',
    component: OptVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptVerificationPageRoutingModule {}
