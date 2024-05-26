import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthRestService } from '@spark-rpg/dl-packages';

import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss'
})
export class LogoutPageComponent implements OnInit {
  private readonly _authRestService: AuthRestService = inject(AuthRestService);
  private readonly _router = inject(Router);

  ngOnInit(): void {
    this._authRestService.logout().subscribe({
      next: () => {
        setTimeout(() => {
          this._router.navigateByUrl(`/${APP_ROUTES.AUTH}/${APP_ROUTES.LOGIN}`);
        }, 3000);
      }
    });
  }
}
