import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Character, CHARACTER_CLASSES, CHARACTER_RACES } from '@spark-rpg/shared-models';

import { StatsForm, StatsFormService } from './stats/stats-form.service';

export interface CharacterForm extends Omit<
  Character,
  'name' | 'class' | 'icon' |
  'race' | 'biography' | 'stats' | 'id'
> {
  name: FormControl<string>;
  class: FormControl<CHARACTER_CLASSES>;
  icon: FormControl<string>;
  race: FormControl<CHARACTER_RACES>;
  biography: FormControl<string>;
  stats: FormGroup<StatsForm>;
}

@Injectable()
export class CharacterFormService {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly statsFormService: StatsFormService = inject(StatsFormService);

  public form: FormGroup<CharacterForm>;

  public init(character: Character): FormGroup<CharacterForm> {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(character.name),
      class: this.formBuilder.control(character.class),
      icon: this.formBuilder.control(character.icon),
      race: this.formBuilder.control(character.race),
      biography: this.formBuilder.control(character.biography),
      stats: this.statsFormService.init(character.stats)
    });

    return this.form;
  }
}
