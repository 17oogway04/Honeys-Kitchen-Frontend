import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesOfferedPage } from './services-offered.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesOfferedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesOfferedPageRoutingModule {}
