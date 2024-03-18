import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { KeyValuePipe, NgForOf } from '@angular/common';

import { RegisterPayload } from '@spark-rpg/shared-models';

import { FormFieldErrorComponent } from '../../../../common/components/form-field-error/form-field-error.component';
import { RegisterForm, RegisterFromBuilderService } from './services/register-from-builder.service';
import { FormGroupComponent } from '../../../../common/components/form-group/form-group.component';
import { ErrorTitlePipe } from '../../../../common/pipes/error-title.pipe';
import { RouterLink } from '@angular/router';
import { BtnDirective } from '../../../../common/directives/btn.directive';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorTitlePipe,
    FormFieldErrorComponent,
    NgForOf,
    KeyValuePipe,
    FormGroupComponent,
    RouterLink,
    BtnDirective,
  ],
  providers: [RegisterFromBuilderService],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  private registerFromBuilderService: RegisterFromBuilderService = inject(RegisterFromBuilderService);

  public form: FormGroup<RegisterForm> = this.registerFromBuilderService.init();
  public usernameErrorsMap: Record<string, string> = this.registerFromBuilderService.usernameErrorsMap;
  public passwordErrorsMap: Record<string, string> = this.registerFromBuilderService.passwordErrorsMap;
  public repeatPasswordErrorsMap: Record<string, string> = this.registerFromBuilderService.repeatPasswordErrorsMap;

  public onSubmit(form: FormGroup<RegisterForm>): void {
    if (form.valid) {
      const formValue: RegisterPayload = form.getRawValue();
      console.log(formValue);
    } else {
      form.markAllAsTouched();
    }
  }
}
