import { loadTranslations } from '@angular/localize';

export type PortfolioLanguage = 'es' | 'en';

const LANGUAGE_STORAGE_KEY = 'alberto-portfolio-language';

const englishTranslations: Record<string, string> = {
  'page.title': 'Alberto Portfolio | Developer',
  'nav.home': 'Home',
  'nav.about': 'About me',
  'nav.experience': 'Experience',
  'nav.achievements': 'Achievements',
  'nav.contact': 'Contact',
  'nav.homeAria': 'Alberto, go to home',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.primary': 'Main navigation',
  'nav.keyboardHelp':
    'Use Tab to move through the menu. From a menu link or section content, use the up and down arrow keys to change sections.',
  'nav.switchLanguage': 'Switch language',
  'nav.currentLanguage': 'Current language',
  'nav.spanish': 'Spanish',
  'nav.english': 'English',
  'hero.available': 'Available for new opportunities',
  'hero.greeting': 'Hi, I am',
  'hero.role': 'Developer',
  'hero.description':
    'I build clear, functional digital experiences. I enjoy turning ideas into useful products, caring for both the details and the people who use them.',
  'hero.actions': 'Professional links',
  'hero.download': 'Download resume',
  'hero.experience': 'View experience',
  'hero.portrait': 'Space for Alberto’s profile photo',
  'hero.portraitAlt': 'Profile illustration of Alberto',
  'hero.scroll': 'Scroll to learn about my career',
  'about.label': 'A little more context',
  'about.titleFirst': 'Behind the code,',
  'about.titleSecond': 'there is a person.',
  'about.intro':
    'I like to understand the why before jumping into the how. I enjoy learning, sharing ideas, and finding solutions that are genuinely useful, not just good-looking in a screenshot.',
  'about.work': 'How I work',
  'about.workTitleFirst': 'With purpose,',
  'about.workTitleSecond': 'as a team, without drama.',
  'about.listenTitle': 'First, I listen.',
  'about.listenText': 'I align on the problem before proposing solutions.',
  'about.buildTitle': 'Then, I build.',
  'about.buildText': 'I move in small steps and share progress.',
  'about.polishTitle': 'Finally, I polish.',
  'about.polishText': 'I care for the details without losing sight of the goal.',
  'about.offHours': 'Outside working hours',
  'about.offHoursTitle': 'I know how to close my laptop, too.',
  'about.offHoursText':
    'I make time to disconnect, recharge my ideas, and enjoy things that do not need an update.',
  'about.quote':
    'My life does not revolve around code. Although sometimes code does try to revolve around my life.',
  'about.restModeFirst': 'OFF',
  'about.restModeSecond': 'THE CLOCK',
  'experience.label': 'Career path',
  'experience.titleFirst': 'Building solutions',
  'experience.titleSecond': 'that keep things moving.',
  'experience.intro':
    'For eight years, I was part of projects connecting people, teams, and the daily operations of a transportation company.',
  'experience.professional': 'Professional experience',
  'experience.yearsFirst': 'years of',
  'experience.yearsSecond': 'experience',
  'experience.startMonth': 'SEP',
  'experience.endMonth': 'FEB',
  'experience.projects': 'Featured projects',
  'experience.projectsIntro': 'Different needs, one goal: make operations easier.',
  'experience.companySummary':
    'Eight years contributing to digital projects and internal systems for the organization’s services and teams.',
  'experience.projectWebsite': 'Corporate website',
  'experience.websiteDescription': 'Contributed to the development of TUFESA’s new corporate website.',
  'experience.web': 'Web',
  'experience.projectPassenger': 'Passenger app',
  'experience.passengerDescription': 'A new mobile app focused on passenger transportation services.',
  'experience.mobile': 'Mobile app',
  'experience.projectAtm': 'ATM Medina app',
  'experience.atmDescription':
    'An app for drivers working in ATM Medina passenger transportation services in Puerto Vallarta.',
  'experience.operations': 'Operations tool',
  'experience.projectErp': 'Corporate ERP',
  'experience.erpDescription': 'Contributed to an ERP project for corporate operations.',
  'experience.corporateSystem': 'Corporate system',
  'experience.projectStaff': 'Internal staff app',
  'experience.staffDescription':
    'An internal tool for managing IT support, maintenance, and parcel delivery tickets.',
  'experience.internalTool': 'Internal tool',
  'achievements.label': 'Achievements and contributions',
  'achievements.titleFirst': 'One career,',
  'achievements.titleSecond': 'many ways to contribute.',
  'achievements.intro':
    'A snapshot of my experience and the range of projects I have contributed to.',
  'achievements.yearsTag': 'Career',
  'achievements.yearsTitle': 'Years of experience',
  'achievements.yearsDescription':
    'A professional chapter from September 2017 to February 2026 at Corporativo TUFESA.',
  'achievements.projectsTag': 'Projects',
  'achievements.projectsTitle': 'Featured projects',
  'achievements.projectsDescription':
    'Contributed to web, mobile, corporate, and internal team tools.',
  'achievements.reachTag': 'Reach',
  'achievements.reachTitle': 'Users and operations',
  'achievements.reachDescription':
    'Experience with solutions for passengers, drivers, and staff, as well as corporate platforms.',
  'contact.label': 'Contact',
  'contact.title': 'Let’s talk.',
  'contact.intro':
    'Have an idea, an opportunity, or just want to say hello? You can reach me here.',
  'contact.methods': 'Contact methods',
  'contact.email': 'Email',
  'contact.whatsapp': 'WhatsApp',
  'contact.linkedin': 'LinkedIn',
  'contact.footerRole': 'Alberto · Developer',
  'contact.backToTop': 'Back to top',
};

export function getPortfolioLanguage(): PortfolioLanguage {
  if (typeof window === 'undefined') {
    return 'es';
  }

  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'en' ? 'en' : 'es';
}

export function initializeLocalization(): PortfolioLanguage {
  const language = getPortfolioLanguage();
  document.documentElement.lang = language;
  document.title =
    language === 'en'
      ? englishTranslations['page.title']
      : 'Portafolio de Alberto | Desarrollador';

  if (language === 'en') {
    loadTranslations(englishTranslations);
  }

  return language;
}

export function changePortfolioLanguage(language: PortfolioLanguage): void {
  persistPortfolioLanguage(language);
  window.location.reload();
}

export function persistPortfolioLanguage(language: PortfolioLanguage): void {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}
