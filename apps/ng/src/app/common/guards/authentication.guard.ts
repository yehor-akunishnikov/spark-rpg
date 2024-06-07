import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { UsersStore, UsersStoreInstance } from '@spark-rpg/dl-packages';
import { APP_ROUTES } from '@spark-rpg/shared-models';

export const authenticationGuard: CanActivateFn = async (): Promise<boolean> => {
  const usersStore: UsersStoreInstance = inject(UsersStore);
  const router: Router = inject(Router);

  if (!usersStore.currentUser()) {
    try {
      await usersStore.loadCurrent();

      return true;
    } catch(e) {
      await router.navigate(['/', APP_ROUTES.AUTH, APP_ROUTES.LOGOUT]);

      return false;
    }
  }

  return true;
};
