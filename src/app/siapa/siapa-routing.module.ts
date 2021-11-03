import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiapaPage } from './siapa.page';

const routes: Routes = [
  {
    path: '',
    component: SiapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiapaPageRoutingModule {}
