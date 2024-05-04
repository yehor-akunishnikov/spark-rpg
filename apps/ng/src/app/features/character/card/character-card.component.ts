import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBodyComponent, CardComponent } from '@spark-rpg/ui-kit';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, CardComponent, CardBodyComponent],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {}
