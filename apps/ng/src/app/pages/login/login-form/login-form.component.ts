import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { LoginPayload, LoginResponse } from '@spark-rpg/shared-models';

import { FormGroupComponent } from '../../../common/components/form-group/form-group.component';
import { AuthRestService } from '../../../data-layers/auth/rest/services/auth-rest.service';
import { LoginForm, LoginFormBuilderService } from './services/login-form-builder.service';
import { BtnDirective } from '../../../common/directives/btn.directive';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormGroupComponent,
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
  private authRestService: AuthRestService = inject(AuthRestService);

  public form: FormGroup<LoginForm> = this.loginFromBuilderService.init();
  public usernameErrorsMap: Record<string, string> = this.loginFromBuilderService.usernameErrorsMap;
  public passwordErrorsMap: Record<string, string> = this.loginFromBuilderService.passwordErrorsMap;

  public onSubmit(form: FormGroup<LoginForm>): void {
    if (form.valid) {
      const formValue = form.getRawValue();
      const loginPayload: LoginPayload = {username: formValue.username, password: formValue.password};

      this.authRestService.login(loginPayload).subscribe({
        next: (loginResponse: LoginResponse) => {
          console.log('success', loginResponse);
        },
        error: () => {
          console.log('error');
        }
      });
    } else {
      form.markAllAsTouched();
    }
  }
}
