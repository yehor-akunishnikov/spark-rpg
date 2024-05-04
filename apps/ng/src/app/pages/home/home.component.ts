import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharacterCardComponent } from '../../features/character/card/character-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CharacterCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }
