import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomButton } from './custom-button';

describe('CustomButton', () => {
  let fixture: ComponentFixture<CustomButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomButton);
    fixture.componentRef.setInput('href', '/cv-alberto.pdf');
    fixture.componentRef.setInput('download', 'cv-alberto.pdf');
    fixture.componentRef.setInput('variant', 'linkedin');
    fixture.componentRef.setInput('target', '_blank');
    fixture.componentRef.setInput('rel', 'noopener noreferrer');
    fixture.detectChanges();
  });

  it('should apply the configured link behavior and visual variant', () => {
    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(anchor.getAttribute('href')).toBe('/cv-alberto.pdf');
    expect(anchor.getAttribute('download')).toBe('cv-alberto.pdf');
    expect(anchor.getAttribute('target')).toBe('_blank');
    expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
    expect(anchor.classList.contains('button-linkedin')).toBeTrue();
  });
});
