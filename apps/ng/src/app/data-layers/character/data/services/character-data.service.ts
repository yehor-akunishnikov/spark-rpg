import { inject, Injectable, signal, WritableSignal } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { Character } from '@spark-rpg/shared-models';

import { CharacterRestService } from '../../rest/services/character-rest.service';
import { toHashMap } from '../../../../common/utils/state-utils';

export interface CharactersState {
  entities: Record<string, Character>;
  list: Character[];
  ids: string[];
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private readonly characterRestService = inject(CharacterRestService);

  public readonly entities: WritableSignal<Record<string, Character>> = signal(null);

  public loadAll() {
    return this.characterRestService.getAll().pipe(
      tap((characters: Character[]) => this.entities.set(toHashMap(characters)))
    );
  }

  public loadOne(id: string): Observable<Character> {
    return this.characterRestService.getOne(id).pipe(
      tap(character => {
        this.entities.update(characters => {
          characters[character.id] = character;

          return characters;
        });
      })
    );
  }

  public create(character: Character): Observable<Character> {
    return this.characterRestService.create(character).pipe(
      tap(newCharacter => {
        this.entities.update(characters => {
          characters[newCharacter.id] = newCharacter;

          return characters;
        });
      }),
    );
  }

  public update(character: Character): Observable<Character> {
    return this.characterRestService.update(character).pipe(
      tap(updatedCharacter => {
        this.entities.update(characters => {
          characters[updatedCharacter.id] = updatedCharacter;

          return characters;
        });
      }),
    );
  }

  public deleteOne(id: string): Observable<void> {
    return this.characterRestService.deleteOne(id).pipe(
      tap(() => {
        this.entities.update(characters => {
          delete characters[id];

          return characters;
        });
      })
    );
  }
}
