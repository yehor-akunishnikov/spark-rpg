import { Component } from '@angular/core';

import { AUTH_ACTIONS } from '../components/auth-form/services/auth-form-builder.service';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthFormComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  readonly AUTH_ACTIONS = AUTH_ACTIONS;
}
