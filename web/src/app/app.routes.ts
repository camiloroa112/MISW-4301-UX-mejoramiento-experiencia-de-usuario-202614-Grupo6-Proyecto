import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { DetalleAlarmaComponent } from './detalle-alarma/detalle-alarma';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alarma/:id', component: DetalleAlarmaComponent },
];
