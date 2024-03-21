import { inject } from '@angular/core';

import { UserDataService } from '../../data/services/user-data.service';

export const currentUserResolver = () => {
  const userDataService = inject(UserDataService);

  return userDataService.getCurrent();
};

export const CURRENT_USER_DATA_KEY = 'currentUserData';
