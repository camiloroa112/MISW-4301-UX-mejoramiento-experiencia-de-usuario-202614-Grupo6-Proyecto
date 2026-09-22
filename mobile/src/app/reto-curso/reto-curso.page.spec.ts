// Librerías
import { RetoCursoPage } from './reto-curso.page';
import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Configuración de los tests
describe('RetoCursoPage', () => {
  
  // Configuración de los tests
  let component: RetoCursoPage;
  let fixture: ComponentFixture<RetoCursoPage>;

  // Inicialización de los tests
  beforeEach(() => {
    fixture = TestBed.createComponent(RetoCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Validación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
