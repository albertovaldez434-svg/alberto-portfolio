import { getPortfolioLanguage, persistPortfolioLanguage } from './localization';

describe('portfolio localization preference', () => {
  beforeEach(() => {
    window.localStorage.removeItem('alberto-portfolio-language');
  });

  it('should default to Spanish', () => {
    expect(getPortfolioLanguage()).toBe('es');
  });

  it('should persist and read the selected language', () => {
    persistPortfolioLanguage('en');

    expect(getPortfolioLanguage()).toBe('en');
  });
});
