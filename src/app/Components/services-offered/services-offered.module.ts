import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesOfferedPageRoutingModule } from './services-offered-routing.module';

import { ServicesOfferedPage } from './services-offered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesOfferedPageRoutingModule
  ],
  declarations: [ServicesOfferedPage]
})
export class ServicesOfferedPageModule {}
