import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the developer landing page', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Alberto');
  });

  it('should render the portfolio sections in order', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = Array.from(
      compiled.querySelectorAll('#inicio, #sobre-mi, #experiencia, #logros, #contacto'),
    );

    expect(sections.map((section) => section.id)).toEqual([
      'inicio',
      'sobre-mi',
      'experiencia',
      'logros',
      'contacto',
    ]);
  });

  it('should move focus between sections with the up and down arrow keys', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const homeSection = compiled.querySelector<HTMLElement>('#inicio');
    const aboutSection = compiled.querySelector<HTMLElement>('#sobre-mi');

    homeSection?.focus();
    homeSection?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
    );

    expect(document.activeElement).toBe(aboutSection);

    aboutSection?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, cancelable: true }),
    );

    expect(document.activeElement).toBe(homeSection);
  });

  it('should navigate to adjacent sections from the navbar links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const experienceLink = compiled.querySelector<HTMLAnchorElement>(
      '.navigation-link[href="#experiencia"]',
    );
    const achievementsSection = compiled.querySelector<HTMLElement>('#logros');

    experienceLink?.focus();
    experienceLink?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
    );

    expect(document.activeElement).toBe(achievementsSection);
  });

  it('should preserve normal arrow-key behavior on interactive controls', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector<HTMLButtonElement>('.language-toggle');
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      cancelable: true,
    });

    button?.dispatchEvent(event);

    expect(event.defaultPrevented).toBeFalse();
  });
});
