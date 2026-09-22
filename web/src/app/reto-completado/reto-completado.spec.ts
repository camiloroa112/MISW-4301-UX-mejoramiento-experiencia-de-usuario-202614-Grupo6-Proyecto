import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RetoCompletadoComponent } from './reto-completado';

describe('RetoCompletadoComponent', () => {
    let fixture: ComponentFixture<RetoCompletadoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RetoCompletadoComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(RetoCompletadoComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should render a link back to the dashboard', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const link = compiled.querySelector('.cta-dashboard') as HTMLAnchorElement;
        expect(link?.textContent).toContain('Ir al dashboard');
    });
});
