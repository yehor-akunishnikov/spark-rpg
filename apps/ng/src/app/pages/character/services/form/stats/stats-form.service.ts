import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { CharacterStats } from '@spark-rpg/shared-models';

export interface StatsForm extends Omit<
  CharacterStats,
  'agility' | 'luck' | 'strength' | 'charisma' |
  'endurance' | 'intelligence' | 'perception'
> {
  strength: FormControl<number>;
  charisma: FormControl<number>;
  endurance: FormControl<number>;
  intelligence: FormControl<number>;
  agility: FormControl<number>;
  perception: FormControl<number>;
  luck: FormControl<number>;
}

@Injectable()
export class StatsFormService {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public init(stats: CharacterStats): FormGroup<StatsForm> {
    return this.formBuilder.group({
      strength: this.formBuilder.control(stats.strength),
      charisma: this.formBuilder.control(stats.charisma),
      endurance: this.formBuilder.control(stats.endurance),
      intelligence: this.formBuilder.control(stats.intelligence),
      agility: this.formBuilder.control(stats.agility),
      perception: this.formBuilder.control(stats.perception),
      luck: this.formBuilder.control(stats.luck),
    });
  }
}
