import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomButton } from '../../shared/custom-button/custom-button';
import { getPortfolioLanguage } from '../../core/i18n/localization';

const RESUME_FILES = {
  es: {
    href: '/files/CV_Alberto_Valdez_Lopez_2026.pdf',
    downloadName: 'CV_Alberto_Valdez_Lopez_2026.pdf',
  },
  en: {
    href: '/files/CV_Alberto_Valdez_Lopez_2026_EN.pdf',
    downloadName: 'CV_Alberto_Valdez_Lopez_2026_EN.pdf',
  },
} as const;

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, CustomButton],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly resume = RESUME_FILES[getPortfolioLanguage()];

  protected readonly copy = {
    available: $localize`:@@hero.available:Disponible para nuevos retos`,
    greeting: $localize`:@@hero.greeting:Hola, soy`,
    role: $localize`:@@hero.role:Desarrollador`,
    description: $localize`:@@hero.description:Desarrollo experiencias digitales claras y funcionales. Me gusta convertir ideas en productos útiles, cuidando tanto los detalles como a las personas que los usan.`,
    actions: $localize`:@@hero.actions:Enlaces profesionales`,
    download: $localize`:@@hero.download:Descargar CV`,
    experience: $localize`:@@hero.experience:Ver experiencia`,
    portrait: $localize`:@@hero.portrait:Espacio para la foto de perfil de Alberto`,
    portraitAlt: $localize`:@@hero.portraitAlt:Ilustración de perfil de Alberto`,
    scroll: $localize`:@@hero.scroll:Desliza para conocer mi trayectoria`,
  };
}
