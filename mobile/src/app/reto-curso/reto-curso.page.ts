// Librerías
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RetoService } from '../services/reto.service';

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

  constructor(
    private readonly router: Router,
    private readonly retoService: RetoService
  ) {}

  // Variables de estado
  protected get totalSteps(): number {
    return this.retoService.totalSteps;
  }

  protected get currentSteps(): number {
    return this.retoService.currentSteps;
  }

  // Métodos de cálculo de estado
  protected get progressPercent(): number {
    return this.retoService.progressPercent;
  }

  // Métodos de cálculo de estilo
  protected get ringGradient(): string {
    const p = this.progressPercent;

    return `conic-gradient(
      #E68A3E 0% ${p}%,
      #D9CFC0 ${p}% 100%
    )`;
  }

  /**
   * Simula el avance del usuario.
   * Al llegar a 32 pasos muestra el aviso.
   * Al llegar a 40 pasos finaliza el reto.
   */
  protected onTapSimulate(): void {

    const state = this.retoService.advanceSteps();

    if (state === 'missing') {
      this.router.navigate(['/reto-faltan']);
      return;
    }

    if (state === 'completed') {
      this.router.navigate(['/reto-ok']);
    }
  }
}