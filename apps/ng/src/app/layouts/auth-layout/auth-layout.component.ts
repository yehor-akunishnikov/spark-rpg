import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { map, Observable } from 'rxjs';

import { FooterComponent, HeaderComponent, HeaderNavLink, LAYOUT_TYPES, MainComponent } from '@spark-rpg/ui-kit';
import { RouterDataService } from '@spark-rpg/dl-packages';
import { APP_ROUTES } from '@spark-rpg/shared-models';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
  private readonly _routerDataService: RouterDataService = inject(RouterDataService);

  readonly LAYOUT_TYPES = LAYOUT_TYPES;
  readonly headerLinks$: Observable<HeaderNavLink[]> = this._getHeaderLinks();

  private _getHeaderLinks(): Observable<HeaderNavLink[]> {
    return this._routerDataService.currentUrl$.pipe(
      map(currentUrl => {
        const links: HeaderNavLink[] = [];

        if (currentUrl.includes(APP_ROUTES.LOGIN)) {
          links.push({ url: `/${APP_ROUTES.AUTH}/${APP_ROUTES.REGISTER}`, text: 'Register' });
        }

        if (currentUrl.includes(APP_ROUTES.REGISTER)) {
          links.push({ url: `/${APP_ROUTES.AUTH}/${APP_ROUTES.LOGIN}`, text: 'Login' });
        }

        return links;
      })
    );
  }
}
