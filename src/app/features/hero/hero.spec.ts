import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
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
    expect(compiled.querySelector('img')?.getAttribute('src')).toBe(
      '/images/profile-placeholder.svg',
    );
  });

  it('should provide working destinations for the main calls to action', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const resumeLink = compiled.querySelector<HTMLAnchorElement>('.button-primary');
    const experienceLink = compiled.querySelector<HTMLAnchorElement>('.button-secondary');
    const linkedInLink = compiled.querySelector<HTMLAnchorElement>('.button-linkedin');

    expect(resumeLink?.getAttribute('href')).toBe('/cv-alberto.pdf');
    expect(resumeLink?.hasAttribute('download')).toBeTrue();
    expect(experienceLink?.getAttribute('href')).toBe('#experiencia');
    expect(linkedInLink?.getAttribute('href')).toBe('https://www.linkedin.com/');
    expect(linkedInLink?.getAttribute('rel')).toContain('noopener');
  });

  it('should use a shared custom button for each call to action', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('app-custom-button').length).toBe(3);
    expect(compiled.querySelectorAll('.button-primary').length).toBe(1);
    expect(compiled.querySelectorAll('.button-secondary').length).toBe(1);
    expect(compiled.querySelectorAll('.button-linkedin').length).toBe(1);
  });
});
