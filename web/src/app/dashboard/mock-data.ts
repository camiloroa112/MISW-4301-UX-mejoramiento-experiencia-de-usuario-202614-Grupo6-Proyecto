// ============================================================================
// mock-data.ts — Datos hardcodeados para la maqueta navegable del Dashboard.
// No hay llamadas HTTP: todo vive acá para que el componente sea puramente
// visual/interactivo, sin lógica de negocio real.
// ============================================================================

export type DeltaVariant = 'positivo' | 'neutral';

export interface KpiCard {
  value: string;
  label: string;
  delta: string;
  deltaVariant: DeltaVariant;
}

export const KPI_CARDS: KpiCard[] = [
  { value: '5', label: 'Días sin posponer', delta: '↑ 2 vs. semana pasada', deltaVariant: 'positivo' },
  { value: '2', label: 'Snoozes esta semana', delta: '↓ 3 vs. semana pasada', deltaVariant: 'positivo' },
  { value: '92%', label: 'Precisión de metas', delta: '↑ 4 pts', deltaVariant: 'positivo' },
  { value: '1', label: 'Salidas de emergencia', delta: 'Últimos 30 días', deltaVariant: 'neutral' },
];

export interface DayChip {
  label: string;
  active: boolean;
}

export const NEXT_ALARM_DAYS: DayChip[] = [
  { label: 'L', active: true },
  { label: 'M', active: true },
  { label: 'X', active: true },
  { label: 'J', active: true },
  { label: 'V', active: true },
  { label: 'S', active: false },
  { label: 'D', active: false },
];

export type ActivityStatusVariant = 'exito' | 'peligro' | 'acento';

export interface ActivityItem {
  title: string;
  subtitle: string;
  status: string;
  statusVariant: ActivityStatusVariant;
}

export const RECENT_ACTIVITY: ActivityItem[] = [
  {
    title: 'Hoy · 06:30',
    subtitle: 'Gym · Reto de escritura',
    status: 'Reto completado',
    statusVariant: 'exito',
  },
  {
    title: 'Ayer · 06:30',
    subtitle: 'Gym · Reto de escritura',
    status: 'Reto completado',
    statusVariant: 'exito',
  },
  {
    title: 'Lun · 06:30',
    subtitle: 'Gym · Reto de escritura',
    status: 'Salida de emergencia',
    statusVariant: 'peligro',
  },
  {
    title: 'Dom · 08:00',
    subtitle: 'Descanso · Sin reto',
    status: 'Pospuesta 2 veces',
    statusVariant: 'acento',
  },
];

export type WeeklyBarVariant = 'suave' | 'borde' | 'acento';

export interface WeeklyBar {
  day: string;
  /** Alto exacto en px, tomado directamente del archivo de Figma. */
  heightPx: number;
  variant: WeeklyBarVariant;
}

export const WEEKLY_SNOOZES: WeeklyBar[] = [
  { day: 'L', heightPx: 44, variant: 'suave' },
  { day: 'M', heightPx: 6, variant: 'borde' },
  { day: 'X', heightPx: 88, variant: 'suave' },
  { day: 'J', heightPx: 44, variant: 'suave' },
  { day: 'V', heightPx: 6, variant: 'borde' },
  { day: 'S', heightPx: 132, variant: 'acento' },
  { day: 'D', heightPx: 44, variant: 'suave' },
];

export interface MockUser {
  initials: string;
  name: string;
  email: string;
}

export const CURRENT_USER: MockUser = {
  initials: 'PA',
  name: 'Paula Alarcón',
  email: 'paula.abc@gmail.com',
};
