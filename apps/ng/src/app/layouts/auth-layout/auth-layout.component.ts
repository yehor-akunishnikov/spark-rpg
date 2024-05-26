import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { FooterComponent, HeaderComponent, HeaderNavLink, LAYOUT_TYPES, MainComponent } from '@spark-rpg/ui-kit';

import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    RouterOutlet
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  readonly LAYOUT_TYPES = LAYOUT_TYPES;
  readonly headerLinks: HeaderNavLink[] = [
    {
      url: `/${APP_ROUTES.HOME}`,
      text: 'Home'
    },
  ];
}
