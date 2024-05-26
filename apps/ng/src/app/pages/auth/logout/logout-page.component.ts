import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { APP_ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss'
})
export class LogoutPageComponent implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl(`/${APP_ROUTES.AUTH}/${APP_ROUTES.LOGIN}`);
    }, 5000);
  }
}
