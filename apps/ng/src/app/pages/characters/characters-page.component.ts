import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './components/card/character-card.component';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css',
})
export class CharactersPageComponent {}
