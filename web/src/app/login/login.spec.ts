import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LoginComponent } from './login';

describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoginComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should render both SSO buttons at full width of the card', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const buttons = compiled.querySelectorAll('.cta-sso');
        expect(buttons.length).toBe(2);
        expect(buttons[0].textContent).toContain('Continuar con Google');
        expect(buttons[1].textContent).toContain('Continuar con Apple');
    });
});
