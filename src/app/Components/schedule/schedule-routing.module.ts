import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePage } from './schedule.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage,
    children: [
      {
        path: 'meal-prep',
        loadChildren: () => import('../meal-prep/meal-prep.module').then( m => m.MealPrepPageModule)
      },
      {
        path: 'catering',
        loadChildren: () => import('../catering/catering.module').then( m => m.CateringPageModule)
      },
      {
        path: 'banquets',
        loadChildren: () => import('../banquets/banquets.module').then( m => m.BanquetsPageModule)
      },
      {
        path: 'consulation',
        loadChildren: () => import('../consulation/consulation.module').then( m => m.ConsulationPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulePageRoutingModule {}
