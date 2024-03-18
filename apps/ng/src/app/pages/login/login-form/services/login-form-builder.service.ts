import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

export interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

@Injectable({
  providedIn: 'root'
})
export class LoginFormBuilderService {
  public usernameErrorsMap: Record<string, string> = {
    required: 'Username is required',
    maxlength: 'Invalid username'
  };

  public passwordErrorsMap: Record<string, string> = {
    required: 'Password is required',
    pattern: 'Invalid password'
  };

  private fb: FormBuilder = inject(FormBuilder);

  public init(): FormGroup<LoginForm> {
    return this.fb.group({
      username: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
          ]
        },
      ),
      password: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
          ]
        }
      ),
    });
  }
}
