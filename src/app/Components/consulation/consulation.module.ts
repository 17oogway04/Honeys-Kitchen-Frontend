import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulationPageRoutingModule } from './consulation-routing.module';

import { ConsulationPage } from './consulation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulationPageRoutingModule
  ],
  declarations: [ConsulationPage]
})
export class ConsulationPageModule {}
