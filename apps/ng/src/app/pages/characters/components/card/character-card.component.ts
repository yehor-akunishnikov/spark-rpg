import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent } from '@spark-rpg/ui-kit';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
})
export class CharacterCardComponent {}
