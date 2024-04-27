import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { catchError, map, of } from 'rxjs';

import { AuthRestService } from '../../data-layers/auth/rest/services/auth-rest.service';
import { UserDataService } from '../../data-layers/user/data/services/user-data.service';

export function logoutGuard(): CanActivateFn {
  return () => {
    const authRestService: AuthRestService = inject(AuthRestService);
    const userDataService = inject(UserDataService);

    userDataService.currentUser.set(null);

    return authRestService.logout().pipe(
      map(() => true),
      catchError(() => of(true))
    );
  };
}
