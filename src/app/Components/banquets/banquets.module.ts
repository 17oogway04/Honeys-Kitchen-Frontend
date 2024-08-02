import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanquetsPageRoutingModule } from './banquets-routing.module';

import { BanquetsPage } from './banquets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanquetsPageRoutingModule
  ],
  declarations: [BanquetsPage]
})
export class BanquetsPageModule {}
