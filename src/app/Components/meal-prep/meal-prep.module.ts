import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealPrepPageRoutingModule } from './meal-prep-routing.module';

import { MealPrepPage } from './meal-prep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealPrepPageRoutingModule
  ],
  declarations: [MealPrepPage]
})
export class MealPrepPageModule {}
