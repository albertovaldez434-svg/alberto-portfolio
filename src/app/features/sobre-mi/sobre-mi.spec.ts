import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMi } from './sobre-mi';

describe('SobreMi', () => {
  let component: SobreMi;
  let fixture: ComponentFixture<SobreMi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should introduce the person and explain their working style', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#about-title')?.textContent).toContain('hay una persona');
    expect(compiled.querySelectorAll('.work-principles li').length).toBe(3);
  });

  it('should include a personal note about life outside work', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#off-hours-title')?.textContent).toContain(
      'cerrar el portátil',
    );
    expect(compiled.querySelector('.off-hours-card blockquote')?.textContent).toContain(
      'girar alrededor de mi vida',
    );
  });
});
