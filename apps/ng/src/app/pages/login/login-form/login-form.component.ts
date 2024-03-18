import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPayload } from '@spark-rpg/shared-models';

import { LoginForm, LoginFormBuilderService } from './services/login-form-builder.service';
import { FormGroupComponent } from '../../../common/components/form-group/form-group.component';
import { RouterLink } from '@angular/router';
import { BtnDirective } from '../../../common/directives/btn.directive';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormGroupComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    BtnDirective
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  private loginFromBuilderService: LoginFormBuilderService = inject(LoginFormBuilderService);

  public form: FormGroup<LoginForm> = this.loginFromBuilderService.init();
  public usernameErrorsMap: Record<string, string> = this.loginFromBuilderService.usernameErrorsMap;
  public passwordErrorsMap: Record<string, string> = this.loginFromBuilderService.passwordErrorsMap;

  public onSubmit(form: FormGroup<LoginForm>): void {
    if (form.valid) {
      const formValue: LoginPayload = form.getRawValue();
      console.log(formValue);
    } else {
      form.markAllAsTouched();
    }
  }
}
