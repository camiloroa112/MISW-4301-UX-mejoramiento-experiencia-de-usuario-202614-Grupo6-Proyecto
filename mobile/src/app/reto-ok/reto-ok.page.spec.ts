// Librerías
import { RetoOkPage } from './reto-ok.page';
import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Configuración de los tests
describe('RetoOkPage', () => {
  
  // Variables de estado
  let component: RetoOkPage;
  let fixture: ComponentFixture<RetoOkPage>;

  // Inicialización de los tests
  beforeEach(() => {
    fixture = TestBed.createComponent(RetoOkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Validación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
