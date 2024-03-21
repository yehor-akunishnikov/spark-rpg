import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { UserDataService } from '../../data-layers/user/data/services/user-data.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent {
  private userDataService: UserDataService = inject(UserDataService);

  public currentUser$ = this.userDataService.currentUser$;
}
