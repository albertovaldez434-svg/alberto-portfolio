import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomButton } from '../../shared/custom-button/custom-button';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, CustomButton],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
}
