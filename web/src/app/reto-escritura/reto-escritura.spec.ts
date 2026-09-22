import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RetoEscrituraComponent } from './reto-escritura';

describe('RetoEscrituraComponent', () => {
    let fixture: ComponentFixture<RetoEscrituraComponent>;
    let component: RetoEscrituraComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RetoEscrituraComponent],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(RetoEscrituraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not show an error while the typed text still matches the target phrase', () => {
        (component as any).typedText = 'El sol ya salió';
        fixture.detectChanges();
        expect((component as any).hasError).toBe(false);
    });

    it('should show an error state as soon as the typed text diverges from the target phrase', () => {
        (component as any).typedText = 'El sol ya se fue';
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect((component as any).hasError).toBe(true);
        expect(compiled.querySelector('.progreso__error')?.textContent).toContain('No coincide');
    });

    it('should mark the challenge as complete when the typed text matches exactly', () => {
        (component as any).typedText = (component as any).targetPhrase;
        fixture.detectChanges();
        expect((component as any).isComplete).toBe(true);
    });
});
