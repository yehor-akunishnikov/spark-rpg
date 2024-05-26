import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inject, Injectable } from '@angular/core';

export enum AUTH_ACTIONS {
  LOGIN = 'Login',
  REGISTER = 'Register'
}

export const strongPasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

@Injectable({
  providedIn: 'root'
})
export class AuthFormBuilderService {
  private readonly _formBuilder = inject(FormBuilder);

  init(authAction: AUTH_ACTIONS): FormGroup {
    switch (authAction) {
      case AUTH_ACTIONS.LOGIN: return this._getLoginForm();
      case AUTH_ACTIONS.REGISTER: return this._getRegisterForm();
    }
  }

  private _getLoginForm(): FormGroup {
    return this._formBuilder.group({
      username: this._formBuilder.control('', [
        Validators.required
      ]),
      password: this._formBuilder.control('', [
        Validators.required
      ]),
    });
  }

  private _getRegisterForm(): FormGroup {
    return this._formBuilder.group({
      username: this._formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      password: this._formBuilder.control('', [
        Validators.required,
        Validators.pattern(strongPasswordRegexp)
      ]),
    });
  }
}
