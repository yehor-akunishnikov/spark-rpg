import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe, KeyValuePipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';

import { CharacterDataService } from '../../data-layers/character/data/services/character-data.service';
import { RouterLink } from '@angular/router';
import { BtnDirective } from '../../common/directives/btn.directive';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink,
    KeyValuePipe,
    NgOptimizedImage,
    BtnDirective
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
  public readonly characterDataService: CharacterDataService = inject(CharacterDataService);
}
