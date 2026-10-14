import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Logros } from './logros';

describe('Logros', () => {
  let fixture: ComponentFixture<Logros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logros],
    }).compileComponents();

    fixture = TestBed.createComponent(Logros);
    fixture.detectChanges();
  });

  it('should summarize the profile with three evidence-based achievements', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.achievement-card').length).toBe(3);
    expect(compiled.textContent).toContain('Años de trayectoria');
    expect(compiled.textContent).toContain('Proyectos destacados');
    expect(compiled.textContent).toContain('De cara al usuario y a la operación');
  });
});
