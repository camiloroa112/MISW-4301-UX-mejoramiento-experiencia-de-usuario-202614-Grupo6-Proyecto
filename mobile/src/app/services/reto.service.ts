import { Injectable } from '@angular/core';

export type RetoStepState = 'progress' | 'missing' | 'completed';

@Injectable({
  providedIn: 'root',
})
export class RetoService {

  // Configuración del reto
  readonly totalSteps = 40;
  readonly stepIncrement = 4;

  // Estado actual
  currentSteps = 12;

  // Evita mostrar varias veces la pantalla "reto-faltan"
  private missingNoticeShown = false;

  // Incrementar pasos
  advanceSteps(): RetoStepState {

    if (this.currentSteps >= this.totalSteps) {
      return 'completed';
    }

    this.currentSteps = Math.min(
      this.totalSteps,
      this.currentSteps + this.stepIncrement
    );

    // Mostrar aviso una sola vez al alcanzar los 32 pasos
    if (
      this.currentSteps >= 32 &&
      this.currentSteps < this.totalSteps &&
      !this.missingNoticeShown
    ) {
      this.missingNoticeShown = true;
      return 'missing';
    }

    // Reto completado
    if (this.currentSteps >= this.totalSteps) {
      return 'completed';
    }

    return 'progress';
  }

  // Pasos faltantes
  get missingSteps(): number {
    return this.totalSteps - this.currentSteps;
  }

  // Porcentaje de progreso
  get progressPercent(): number {
    return Math.round(
      (this.currentSteps / this.totalSteps) * 100
    );
  }

  // Reiniciar el reto
  reset(): void {
    this.currentSteps = 12;
    this.missingNoticeShown = false;
  }
}