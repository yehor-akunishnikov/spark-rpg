import { JsonPipe, KeyValuePipe, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Character } from '@spark-rpg/shared-models';

import { RadioGroupComponent } from '../../common/components/radio-group/radio-group.component';
import { CharacterForm, CharacterFormService } from './services/form/character-form.service';
import { FormGroupComponent } from '../../common/components/form-group/form-group.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { StatsFormComponent } from './components/stats-form/stats-form.component';
import { CharacterModelService } from './services/model/character-model.service';
import { StatsFormService } from './services/form/stats/stats-form.service';
import { BtnDirective } from '../../common/directives/btn.directive';
import { CharacterDataService } from '../../data-layers/character/data/services/character-data.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TOAST_STATUSES, ToastService } from '../../common/components/toast/services/toast.service';
import { Router } from '@angular/router';

export enum CHARACTER_CRUD_TABS {
  GENERAL = 'general',
  STATS = 'stats',
}

@Component({
  selector: 'app-character-crud-modal',
  standalone: true,
  imports: [
    BtnDirective,
    ReactiveFormsModule,
    FormGroupComponent,
    RadioGroupComponent,
    StatsFormComponent,
    NgSwitchCase,
    NgSwitch,
    NgIf,
    BtnDirective,
    FormGroupComponent,
    RadioGroupComponent,
    GeneralFormComponent,
    NgTemplateOutlet,
    NgForOf,
    KeyValuePipe,
    JsonPipe
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CharacterModelService,
    CharacterFormService,
    StatsFormService
  ]
})
export class CharacterComponent implements OnInit {
  @Input() public readonly id: string;

  private readonly characterModelService: CharacterModelService = inject(CharacterModelService);
  private readonly characterFormService: CharacterFormService = inject(CharacterFormService);
  private readonly characterDataService: CharacterDataService = inject(CharacterDataService);
  private readonly toastService: ToastService = inject(ToastService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly router: Router = inject(Router);

  public readonly tabs = CHARACTER_CRUD_TABS;

  public form: FormGroup<CharacterForm>;
  public isEditMode = false;
  public currentTab: 'general' | 'stats' = 'general';

  public ngOnInit(): void {
    const character: Character = this.characterDataService.entities()[this.id];

    this.form = this.characterFormService.init(
      this.characterModelService.init(character)
    );
    this.isEditMode = !!character;
  }

  public setTab(tab: string): void {
    this.currentTab = tab as CHARACTER_CRUD_TABS;
  }

  public onSubmit(form: FormGroup<CharacterForm>, isEditMode: boolean, id: string): void {
    if (form.valid) {
      if (isEditMode) {
        this.update(form.getRawValue(), id);
      } else {
        this.create(form.getRawValue());
      }
    } else {
      form.markAllAsTouched();
    }
  }

  private create(character: Character): void {
    this.characterDataService.create(character).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: (character: Character) => {
        this.router.navigateByUrl(`/characters/edit/${character.id}`).then(
          () => this.toastService.showToast(TOAST_STATUSES.SUCCESS, 'Successfully created!')
        );
      },
      error: () => {
        this.toastService.showToast(TOAST_STATUSES.ERROR, 'Failed to create character!');
      },
    });
  }

  private update(character: Character, id: string): void {
    this.characterDataService.update({...character, id}).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: () => {
        this.toastService.showToast(TOAST_STATUSES.SUCCESS, 'Successfully updated!');
      },
      error: () => {
        this.toastService.showToast(TOAST_STATUSES.ERROR, 'Failed to update character!');
      },
    });
  }

  public delete(id: string): void {
    this.characterDataService.deleteOne(id).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: () => {
        this.router.navigateByUrl(`/characters/list`).then(
          () => this.toastService.showToast(TOAST_STATUSES.SUCCESS, 'Successfully deleted!')
        );
      },
      error: () => {
        this.toastService.showToast(TOAST_STATUSES.ERROR, 'Failed to delete character!');
      },
    });
  }
}
