import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

import { FormGroupComponent } from '../../../../common/components/form-group/form-group.component';
import { CharacterFormService } from '../../services/form/character-form.service';
import { BtnDirective } from '../../../../common/directives/btn.directive';
import { StatsForm } from '../../services/form/stats/stats-form.service';

@Component({
  selector: 'app-stats-form',
  standalone: true,
  imports: [
    FormGroupComponent,
    ReactiveFormsModule,
    BtnDirective,
    NgForOf,
    NgIf
  ],
  templateUrl: './stats-form.component.html',
  styleUrl: './stats-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsFormComponent {
  private readonly characterFormService: CharacterFormService = inject(CharacterFormService);

  public readonly statsList: string[] = [
    'strength',
    'charisma',
    'endurance',
    'intelligence',
    'agility',
    'perception',
    'luck'
  ];

  public form: FormGroup<StatsForm> = this.characterFormService.form.get('stats') as FormGroup<StatsForm>;
}
