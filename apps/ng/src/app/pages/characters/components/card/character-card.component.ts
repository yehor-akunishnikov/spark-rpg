import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, BtnDirective } from '@spark-rpg/ui-kit';

import { APP_ROUTES } from '../../../../app.routes';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    CardFooterComponent,
    NgOptimizedImage,
    BtnDirective,
    RouterLink
  ],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  readonly APP_ROUTES = APP_ROUTES;
}
