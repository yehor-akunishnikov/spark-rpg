import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent, HeaderComponent, MainComponent } from '@spark-rpg/ui-kit';

import { APP_ROUTES } from '../../app.routes';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent {
  readonly headerLinks = [
    {
      url: `/${APP_ROUTES.HOME}`,
      text: 'Home'
    },
    {
      url: `/${APP_ROUTES.CHARACTERS}`,
      text: 'Characters'
    },
    {
      url: `/${APP_ROUTES.AUTH}/${APP_ROUTES.LOGOUT}`,
      text: 'Logout'
    }
  ];
}
