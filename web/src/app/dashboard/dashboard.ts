import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import {
  KPI_CARDS,
  NEXT_ALARM_DAYS,
  RECENT_ACTIVITY,
  WEEKLY_SNOOZES,
  CURRENT_USER,
} from './mock-data';

/**
 * DashboardComponent
 *
 * Maqueta navegable (NO funcional) del dashboard de snoozeless-web.
 * Todos los datos son mock, hardcodeados en `mock-data.ts` — no hay
 * llamadas HTTP ni estado real. Los elementos interactivos (botón,
 * enlaces, ítems de actividad, nav) tienen estados hover/active
 * puramente visuales definidos en dashboard.scss.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  protected readonly user = CURRENT_USER;
  protected readonly kpiCards = KPI_CARDS;
  protected readonly nextAlarmDays = NEXT_ALARM_DAYS;
  protected readonly recentActivity = RECENT_ACTIVITY;
  protected readonly weeklySnoozes = WEEKLY_SNOOZES;
}
