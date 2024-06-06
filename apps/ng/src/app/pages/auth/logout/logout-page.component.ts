import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthRestService, UsersStore } from '@spark-rpg/dl-packages';
import { APP_ROUTES } from '@spark-rpg/shared-models';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss'
})
export class LogoutPageComponent implements OnInit {
  private readonly _usersStore = inject(UsersStore);
  private readonly _authRestService: AuthRestService = inject(AuthRestService);
  private readonly _router = inject(Router);

  async ngOnInit(): Promise<void> {
    try {
      await this._authRestService.logout();
    } catch (e) {
      await this._router.navigate(['/', APP_ROUTES.AUTH, APP_ROUTES.LOGIN]);
    }

    this._usersStore.reset();

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._router.navigate(['/', APP_ROUTES.AUTH, APP_ROUTES.LOGIN]));
      }, 2000);
    });
  }
}
