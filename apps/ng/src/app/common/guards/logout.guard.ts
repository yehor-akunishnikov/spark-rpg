import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { AuthRestService } from '../../data-layers/auth/rest/services/auth-rest.service';

export function logoutGuard(): CanActivateFn {
  return async () => {
    const authRestService: AuthRestService = inject(AuthRestService);

    await lastValueFrom(authRestService.logout());

    return true;
  };
}
