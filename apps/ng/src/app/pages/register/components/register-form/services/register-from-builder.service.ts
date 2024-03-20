import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

import { LoginPayload } from '@spark-rpg/shared-models';

import { passwordsNotEqualValidator } from '../validators/passwords-not-equal.validator';

export interface RegisterForm extends Omit<LoginPayload, 'username' | 'password'> {
  username: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
}

@Injectable()
export class RegisterFromBuilderService {
  private fb: FormBuilder = inject(FormBuilder);

  public usernameErrorsMap: Record<string, string> = {
    required: 'Username is required',
    maxlength: 'Invalid username',
    usernameDuplicated: 'Such user already exists'
  };
  public passwordErrorsMap: Record<string, string> = {
    required: 'Password is required',
    pattern: 'Invalid password'
  };
  public repeatPasswordErrorsMap: Record<string, string> = {
    passwordsEquality: 'Passwords must be equal',
  }

  public init(): FormGroup<RegisterForm> {
    return this.fb.group({
      username: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
            Validators.maxLength(10),
          ],
        },
      ),
      password: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
            Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/)
          ],
        }
      ),
      repeatPassword: this.fb.control(''),
    }, {
      validators: [passwordsNotEqualValidator()],
    });
  }
}
