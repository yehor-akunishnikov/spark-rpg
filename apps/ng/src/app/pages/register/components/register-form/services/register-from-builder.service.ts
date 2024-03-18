import { FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

export interface RegisterForm {
  username: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
}

@Injectable()
export class RegisterFromBuilderService {
  public usernameErrorsMap: Record<string, string> = {
    required: 'Username is required',
    maxlength: 'Invalid username'
  };

  public passwordErrorsMap: Record<string, string> = {
    required: 'Password is required',
    pattern: 'Invalid password'
  };

  public repeatPasswordErrorsMap: Record<string, string> = {
    passwordsEquality: 'Passwords must be equal',
  }

  private fb: FormBuilder = inject(FormBuilder);

  public init(): FormGroup<RegisterForm> {
    return this.fb.group({
      username: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
            Validators.maxLength(10),
          ]
        },
      ),
      password: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
            Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)
          ]
        }
      ),
      repeatPassword: this.fb.control(''),
    }, { validators: [this.getPasswordsEqualityValidator()] });
  }

  private getPasswordsEqualityValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password');
      const repeatPassword = formGroup.get('repeatPassword');

      if (password.value !== repeatPassword.value) {
        repeatPassword.setErrors({ passwordsEquality: true });
      } else {
        repeatPassword.setErrors(null);
      }

      return null;
    };
  }
}
