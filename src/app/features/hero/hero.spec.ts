import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';
import { persistPortfolioLanguage } from '../../core/i18n/localization';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    persistPortfolioLanguage('es');

    await TestBed.configureTestingModule({
      imports: [Hero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the developer introduction and profile image template', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Alberto');
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe('/images/cartoon_avatar.png');
  });

  it('should provide working destinations for the main calls to action', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const resumeLink = compiled.querySelector<HTMLAnchorElement>('.button-primary');
    const experienceLink = compiled.querySelector<HTMLAnchorElement>('.button-secondary');
    const linkedInLink = compiled.querySelector<HTMLAnchorElement>('.button-linkedin');

    expect(resumeLink?.getAttribute('href')).toBe('/files/CV_Alberto_Valdez_Lopez_2026.pdf');
    expect(resumeLink?.getAttribute('download')).toBe('CV_Alberto_Valdez_Lopez_2026.pdf');
    expect(experienceLink?.getAttribute('href')).toBe('#experiencia');
    expect(linkedInLink?.getAttribute('href')).toBe(
      'https://www.linkedin.com/in/albertovaldez434',
    );
    expect(linkedInLink?.getAttribute('rel')).toContain('noopener');
  });

  it('should use a shared custom button for each call to action', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('app-custom-button').length).toBe(3);
    expect(compiled.querySelectorAll('.button-primary').length).toBe(1);
    expect(compiled.querySelectorAll('.button-secondary').length).toBe(1);
    expect(compiled.querySelectorAll('.button-linkedin').length).toBe(1);
  });

  it('should select the provisional English resume when the site language is English', () => {
    persistPortfolioLanguage('en');
    fixture.destroy();
    fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    const resumeLink = fixture.nativeElement.querySelector(
      '.button-primary',
    ) as HTMLAnchorElement;

    expect(resumeLink.getAttribute('href')).toBe(
      '/files/CV_Alberto_Valdez_Lopez_2026_EN.pdf',
    );
    expect(resumeLink.getAttribute('download')).toBe(
      'CV_Alberto_Valdez_Lopez_2026_EN.pdf',
    );
  });
});
