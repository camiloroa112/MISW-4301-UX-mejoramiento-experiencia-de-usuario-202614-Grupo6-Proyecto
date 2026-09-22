import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DetalleAlarmaVivoComponent } from './detalle-alarma-vivo';

describe('DetalleAlarmaVivoComponent', () => {
    let fixture: ComponentFixture<DetalleAlarmaVivoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DetalleAlarmaVivoComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(DetalleAlarmaVivoComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should show the alarm name and time in the "sonando" banner', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.sonando__subtitle')?.textContent).toContain('Gym');
        expect(compiled.querySelector('.sonando__subtitle')?.textContent).toContain('06:30');
    });

    it('should render the "Ir al reto" link pointing to the writing challenge', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const link = compiled.querySelector('.btn-solid-invert') as HTMLAnchorElement;
        expect(link?.textContent).toContain('Ir al reto');
    });
});
