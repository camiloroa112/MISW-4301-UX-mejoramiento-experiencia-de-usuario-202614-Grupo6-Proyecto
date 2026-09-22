import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoCursoPage } from './reto-curso.page';

describe('RetoCursoPage', () => {
  let component: RetoCursoPage;
  let fixture: ComponentFixture<RetoCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
