import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { APP_ROUTES, LoginPayload, RegisterPayload } from '@spark-rpg/shared-models';
import { AuthRestService } from '@spark-rpg/dl-packages';
import {
  BtnDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ErrorsMap,
  InputGroupComponent
} from '@spark-rpg/ui-kit';

import { AUTH_ACTIONS, AuthFormBuilderService } from './services/auth-form-builder.service';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    BtnDirective,
    InputGroupComponent,
    ReactiveFormsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    RouterLink
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent implements OnInit {
  private readonly _authFormBuilderService: AuthFormBuilderService = inject(AuthFormBuilderService);
  private readonly _authRestService: AuthRestService = inject(AuthRestService);
  private readonly _router: Router = inject(Router);

  @Input() formTitle: string;
  @Input() authAction: AUTH_ACTIONS;

  readonly AUTH_ACTIONS = AUTH_ACTIONS;
  readonly APP_ROUTES = APP_ROUTES;

  readonly usernameErrorsConfig: ErrorsMap = {
    required: 'Username is required',
    maxlength: 'Username is too long',
    minlength: 'Username is too short'
  };

  readonly passwordErrorsConfig: ErrorsMap = {
    required: 'Password is required',
    pattern: 'Password is too weak'
  };

  authForm: FormGroup;

  ngOnInit(): void {
    this.authForm = this._authFormBuilderService.init(this.authAction);
  }

  async onSubmit(form: FormGroup) {
    if (form.invalid || form.pristine) {
      return;
    }

    const payload = form.getRawValue();

    switch (this.authAction) {
      case AUTH_ACTIONS.REGISTER: {
        await this._register(payload);
        break;
      }
      case AUTH_ACTIONS.LOGIN: {
        await this._login(payload);
        break;
      }
    }
  }

  private async _register(registerPayload: RegisterPayload): Promise<void> {
    await this._authRestService.register(registerPayload);

    await this._router.navigate(['/', APP_ROUTES.AUTH, APP_ROUTES.LOGIN]);
  }

  private async _login(loginPayload: LoginPayload): Promise<void> {
    await this._authRestService.login(loginPayload);

    await this._router.navigate(['/', APP_ROUTES.HOME]);
  }
}
