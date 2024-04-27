import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { catchError, map, of } from 'rxjs';

import { UserDataService } from '../../data-layers/user/data/services/user-data.service';

export function authGuard(): CanActivateFn {
  return () => {
    const userDataService: UserDataService = inject(UserDataService);
    const router: Router = inject(Router);

    if (userDataService.currentUser()) {
      return true;
    }

    return userDataService.loadCurrent().pipe(
      map(() => true),
      catchError(() => of(router.createUrlTree(['/auth/logout']))
    ));
  };
}
