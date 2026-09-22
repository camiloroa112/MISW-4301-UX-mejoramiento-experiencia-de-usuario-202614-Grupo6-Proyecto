import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetoOkPage } from './reto-ok.page';

describe('RetoOkPage', () => {
  let component: RetoOkPage;
  let fixture: ComponentFixture<RetoOkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoOkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
