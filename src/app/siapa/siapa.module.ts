import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiapaPageRoutingModule } from './siapa-routing.module';

import { SiapaPage } from './siapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiapaPageRoutingModule
  ],
  declarations: [SiapaPage]
})
export class SiapaPageModule {}
