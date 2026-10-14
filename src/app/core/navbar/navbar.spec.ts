import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    fixture.detectChanges();
  });

  it('should link to every portfolio section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.navigation-link'));

    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#inicio',
      '#sobre-mi',
      '#experiencia',
      '#logros',
      '#contacto',
    ]);
  });

  it('should toggle the mobile menu and close it after navigation', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggle = compiled.querySelector<HTMLButtonElement>('.menu-toggle');
    const experienceLink = compiled.querySelector<HTMLAnchorElement>(
      '.navigation-link[href="#experiencia"]',
    );

    toggle?.click();
    fixture.detectChanges();
    expect(toggle?.getAttribute('aria-expanded')).toBe('true');
    expect(compiled.querySelector('.navigation')?.classList.contains('is-open')).toBeTrue();

    experienceLink?.click();
    fixture.detectChanges();
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    expect(compiled.querySelector('.navigation')?.classList.contains('is-open')).toBeFalse();
  });
});
