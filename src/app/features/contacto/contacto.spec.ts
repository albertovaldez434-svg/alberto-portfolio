import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contacto } from './contacto';

describe('Contacto', () => {
  let fixture: ComponentFixture<Contacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacto],
    }).compileComponents();

    fixture = TestBed.createComponent(Contacto);
    fixture.detectChanges();
  });

  it('should provide email, WhatsApp, and LinkedIn contact options', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.contact-link'));

    expect(links.map((link) => link.querySelector('.contact-label')?.textContent?.trim())).toEqual([
      'Email',
      'WhatsApp',
      'LinkedIn',
    ]);
    expect(links.at(0)?.getAttribute('href')).toBe('mailto:albertovaldez434@gmail.com');
    expect(links.at(1)?.getAttribute('href')).toBe('https://wa.me/526441727482');
    expect(links.at(2)?.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/albertovaldez434',
    );
  });
});
