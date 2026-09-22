import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

/**
 * RetoCursoPage
 *
 * Maqueta navegable (NO funcional salvo por la simulación explícita que pide
 * el propio diseño: "toca la pantalla para simular que completas los pasos").
 * Nodo de Figma 14:35 "M03-reto-curso".
 */
@Component({
  selector: 'app-reto-curso',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent],
  templateUrl: './reto-curso.page.html',
  styleUrl: './reto-curso.page.scss',
})
export class RetoCursoPage {
  protected readonly totalSteps = 40;
  protected readonly stepIncrement = 4;
  protected currentSteps = 12;

  protected get progressPercent(): number {
    return Math.round((this.currentSteps / this.totalSteps) * 100);
  }

  protected get ringGradient(): string {
    const p = this.progressPercent;
    return `conic-gradient(#E68A3E 0% ${p}%, #D9CFC0 ${p}% 100%)`;
  }

  /** Simula avanzar pasos al tocar la pantalla, como pide el propio diseño. */
  protected onTapSimulate(): void {
    if (this.currentSteps >= this.totalSteps) {
      return;
    }
    this.currentSteps = Math.min(this.totalSteps, this.currentSteps + this.stepIncrement);
  }
}
