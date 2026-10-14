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
});
