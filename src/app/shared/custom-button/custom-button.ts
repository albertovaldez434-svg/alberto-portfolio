import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type CustomButtonVariant = 'primary' | 'secondary' | 'linkedin' | 'github';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomButton {
  readonly href = input.required<string>();
  readonly variant = input<CustomButtonVariant>('primary');
  readonly download = input<string | boolean>();
  readonly target = input<string>();
  readonly rel = input<string>();
}
