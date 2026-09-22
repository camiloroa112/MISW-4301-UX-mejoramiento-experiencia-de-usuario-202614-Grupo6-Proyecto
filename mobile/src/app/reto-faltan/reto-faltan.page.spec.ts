import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoFaltanPage } from './reto-faltan.page';

describe('RetoFaltanPage', () => {
  let component: RetoFaltanPage;
  let fixture: ComponentFixture<RetoFaltanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoFaltanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
