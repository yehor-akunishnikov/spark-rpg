import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

import { catchError } from 'rxjs';

import { APP_ROUTES } from '@spark-rpg/shared-models';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router: Router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401: {
          router.navigate(['/', APP_ROUTES.AUTH, APP_ROUTES.LOGOUT]);
        }
      }

      throw error;
    })
  );
};
