import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Components/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./Components/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./Components/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'services-offered',
    loadChildren: () => import('./Components/services-offered/services-offered.module').then( m => m.ServicesOfferedPageModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('./Components/getting-started/getting-started.module').then( m => m.GettingStartedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
