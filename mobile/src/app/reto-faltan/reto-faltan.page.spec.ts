// Librerías
import { provideRouter } from '@angular/router';
import { RetoFaltanPage } from './reto-faltan.page';
import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Configuración de los tests
describe('RetoFaltanPage', () => {

  let component: RetoFaltanPage;
  let fixture: ComponentFixture<RetoFaltanPage>;

  // Inicialización de los tests
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoFaltanPage],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RetoFaltanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Validación del componente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});