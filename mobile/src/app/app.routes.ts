import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'reto-curso',
    loadComponent: () => import('./reto-curso/reto-curso.page').then( m => m.RetoCursoPage)
  },
  {
    path: 'reto-faltan',
    loadComponent: () => import('./reto-faltan/reto-faltan.page').then( m => m.RetoFaltanPage)
  },
  {
    path: 'reto-ok',
    loadComponent: () => import('./reto-ok/reto-ok.page').then( m => m.RetoOkPage)
  },
];
