import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnDirective, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent } from '@spark-rpg/ui-kit';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [
    CommonModule,
    BtnDirective,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css',
})
export class CharacterPageComponent {}
