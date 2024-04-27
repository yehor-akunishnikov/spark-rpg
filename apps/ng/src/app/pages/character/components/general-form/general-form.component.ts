import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { RadioGroupComponent } from '../../../../common/components/radio-group/radio-group.component';
import { FormGroupComponent } from '../../../../common/components/form-group/form-group.component';
import { CharacterForm, CharacterFormService } from '../../services/form/character-form.service';
import { CharacterModelService } from '../../services/model/character-model.service';

@Component({
  selector: 'app-general-form',
  standalone: true,
  imports: [
    FormGroupComponent,
    RadioGroupComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './general-form.component.html',
  styleUrl: './general-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralFormComponent {
  private readonly characterFormService: CharacterFormService = inject(CharacterFormService);
  private readonly characterModelService: CharacterModelService = inject(CharacterModelService);

  public readonly classOptions = this.characterModelService.classOptions;
  public readonly raceOptions = this.characterModelService.raceOptions;

  public form: FormGroup<CharacterForm> = this.characterFormService.form;
}
