import { Component } from '@angular/core';

import { AUTH_ACTIONS } from '../components/auth-form/services/auth-form-builder.service';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthFormComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  readonly AUTH_ACTIONS = AUTH_ACTIONS;
}
