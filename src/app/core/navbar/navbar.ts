import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  changePortfolioLanguage,
  getPortfolioLanguage,
  type PortfolioLanguage,
} from '../i18n/localization';

interface NavigationItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'handleSectionNavigation($event)',
  },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  protected readonly menuOpen = signal(false);
  protected readonly selectedLanguage = signal<PortfolioLanguage>(getPortfolioLanguage());
  protected readonly languageSwitchLabel = $localize`:@@nav.switchLanguage:Cambiar idioma`;
  protected readonly currentLanguageLabel = $localize`:@@nav.currentLanguage:Idioma actual`;
  protected readonly languageNames = {
    es: $localize`:@@nav.spanish:Español`,
    en: $localize`:@@nav.english:Inglés`,
  };
  protected readonly homeAriaLabel = $localize`:@@nav.homeAria:Alberto, ir al inicio`;
  protected readonly openMenuLabel = $localize`:@@nav.openMenu:Abrir menú`;
  protected readonly closeMenuLabel = $localize`:@@nav.closeMenu:Cerrar menú`;
  protected readonly navigationAriaLabel = $localize`:@@nav.primary:Navegación principal`;
  protected readonly keyboardNavigationHelp = $localize`:@@nav.keyboardHelp:Usa Tab para recorrer el menú. Desde un enlace del menú o el contenido de una sección, usa las flechas arriba y abajo para cambiar de sección.`;
  protected readonly navigationItems: NavigationItem[] = [
    { label: $localize`:@@nav.home:Inicio`, href: '#inicio' },
    { label: $localize`:@@nav.about:Sobre mí`, href: '#sobre-mi' },
    { label: $localize`:@@nav.experience:Experiencia`, href: '#experiencia' },
    { label: $localize`:@@nav.achievements:Logros`, href: '#logros' },
    { label: $localize`:@@nav.contact:Contacto`, href: '#contacto' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleLanguage(): void {
    const nextLanguage = this.selectedLanguage() === 'es' ? 'en' : 'es';
    this.selectedLanguage.set(nextLanguage);
    changePortfolioLanguage(nextLanguage);
  }

  protected handleSectionNavigation(event: KeyboardEvent): void {
    if (
      (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.defaultPrevented
    ) {
      return;
    }

    const target = event.target;
    const view = this.document.defaultView;

    if (!view || !(target instanceof view.Element)) {
      return;
    }

    const navigationLink = target.closest<HTMLAnchorElement>('.navigation-link');
    const interactiveElement = target.closest(
      'a, button, input, textarea, select, summary, [contenteditable="true"], [role="slider"], [role="spinbutton"]',
    );

    if (interactiveElement && !navigationLink) {
      return;
    }

    const sectionSelector = this.navigationItems.map((item) => item.href).join(', ');
    const sections = Array.from(
      this.document.querySelectorAll<HTMLElement>(sectionSelector),
    );
    const currentSectionId = navigationLink
      ? navigationLink.getAttribute('href')?.slice(1)
      : target.closest<HTMLElement>(sectionSelector)?.id;
    const currentIndex = sections.findIndex((section) => section.id === currentSectionId);

    if (currentIndex < 0) {
      return;
    }

    const nextSection = sections[currentIndex + (event.key === 'ArrowDown' ? 1 : -1)];

    if (!nextSection) {
      return;
    }

    event.preventDefault();
    nextSection.scrollIntoView({
      behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
    nextSection.focus({ preventScroll: true });
  }
}
