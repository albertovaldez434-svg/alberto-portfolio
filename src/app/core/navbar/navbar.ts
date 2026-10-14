import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
})
export class Navbar {
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
}
