import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiencia } from './experiencia';

describe('Experiencia', () => {
  let component: Experiencia;
  let fixture: ComponentFixture<Experiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiencia],
    }).compileComponents();

    fixture = TestBed.createComponent(Experiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the TUFESA employment period and location', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(component).toBeTruthy();
    expect(compiled.querySelector('#company-name')?.textContent).toContain('Corporativo TUFESA');
    expect(compiled.querySelector('.career-period')?.textContent).toContain('SEP 2017');
    expect(compiled.querySelector('.career-period')?.textContent).toContain('FEB 2026');
    expect(compiled.querySelector('.career-location')?.textContent).toContain(
      'Ciudad Obregón, Sonora',
    );
  });

  it('should list all five projects from the profile', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const projectTitles = Array.from(compiled.querySelectorAll('.project-card h4')).map(
      (heading) => heading.textContent?.trim(),
    );

    expect(projectTitles).toEqual([
      'Sitio corporativo',
      'App de pasaje',
      'App ATM Medina',
      'ERP corporativo',
      'App para staff interno',
    ]);
    expect(compiled.textContent).toContain('soporte técnico, mantenimiento y paquetería');
  });
});
