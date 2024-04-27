import { Injectable } from '@angular/core';

import { Character, CHARACTER_CLASSES, CHARACTER_RACES } from '@spark-rpg/shared-models';

import { RadioOption } from '../../../../common/components/radio-group/radio-group.component';

@Injectable()
export class CharacterModelService {
  public readonly classOptions: RadioOption[] = Object
    .values(CHARACTER_CLASSES)
    .map((className) => ({name: className, value: className}));

  public readonly raceOptions: RadioOption[] = Object
    .values(CHARACTER_RACES)
    .map((raceName) => ({name: raceName, value: raceName}));

  public init(character: Character): Character {
    return character ?? {
      name: '',
      stats: {
        strength: 0,
        charisma: 0,
        endurance: 0,
        intelligence: 0,
        agility: 0,
        perception: 0,
        luck: 0
      },
      class: CHARACTER_CLASSES.WARRIOR,
      race: CHARACTER_RACES.HUMAN,
      biography: '',
      icon: null,
    };
  }
}
