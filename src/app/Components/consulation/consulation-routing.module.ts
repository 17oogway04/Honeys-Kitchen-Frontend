import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulationPage } from './consulation.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulationPageRoutingModule {}
