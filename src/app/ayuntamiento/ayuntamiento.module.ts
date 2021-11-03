import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyuntamientoPageRoutingModule } from './ayuntamiento-routing.module';

import { AyuntamientoPage } from './ayuntamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyuntamientoPageRoutingModule
  ],
  declarations: [AyuntamientoPage]
})
export class AyuntamientoPageModule {}
