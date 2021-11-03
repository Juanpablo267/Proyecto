import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ayuntamiento',
    loadChildren: () => import('./ayuntamiento/ayuntamiento.module').then( m => m.AyuntamientoPageModule)
  },
  {
    path: 'siapa',
    loadChildren: () => import('./siapa/siapa.module').then( m => m.SiapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
