import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanquetsPage } from './banquets.page';

const routes: Routes = [
  {
    path: '',
    component: BanquetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanquetsPageRoutingModule {}
