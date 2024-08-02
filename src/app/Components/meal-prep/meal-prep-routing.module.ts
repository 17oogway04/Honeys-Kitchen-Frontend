import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealPrepPage } from './meal-prep.page';

const routes: Routes = [
  {
    path: '',
    component: MealPrepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealPrepPageRoutingModule {}
