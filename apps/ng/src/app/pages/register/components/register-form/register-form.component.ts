import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { RegisterPayload } from '@spark-rpg/shared-models';

import { TOAST_STATUSES, ToastService } from '../../../../common/components/toast/services/toast.service';
import { RegisterForm, RegisterFromBuilderService } from './services/register-from-builder.service';
import { FormGroupComponent } from '../../../../common/components/form-group/form-group.component';
import { AuthRestService } from '../../../../data-layers/auth/rest/services/auth-rest.service';
import { BtnDirective } from '../../../../common/directives/btn.directive';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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
  private authRestService: AuthRestService = inject(AuthRestService);
  private toastService: ToastService = inject(ToastService);
  private router: Router = inject(Router);

  public form: FormGroup<RegisterForm> = this.registerFromBuilderService.init();
  public usernameErrorsMap: Record<string, string> = this.registerFromBuilderService.usernameErrorsMap;
  public passwordErrorsMap: Record<string, string> = this.registerFromBuilderService.passwordErrorsMap;
  public repeatPasswordErrorsMap: Record<string, string> = this.registerFromBuilderService.repeatPasswordErrorsMap;

  public onSubmit(form: FormGroup<RegisterForm>): void {
    if (form.valid) {
      const formValue = form.getRawValue();
      const registerPayload: RegisterPayload = {username: formValue.username, password: formValue.password};

      this.authRestService.register(registerPayload).subscribe({
        next: () => {
          this.toastService.showToast(TOAST_STATUSES.SUCCESS, 'Successfully registered, redirecting to login page');
          this.router.navigateByUrl('/auth/login');
        },
        error: () => {
          this.toastService.showToast(TOAST_STATUSES.ERROR, 'Failed to Sign Up. Please, try again');
        }
      });
    } else {
      form.markAllAsTouched();
    }
  }
}
