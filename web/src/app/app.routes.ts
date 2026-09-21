// Libraries
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';

// Application routes
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];
