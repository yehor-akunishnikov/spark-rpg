import { inject } from '@angular/core';

import { patchState, signalStore, type, withMethods, withState } from '@ngrx/signals';
import { addEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { EntityIdKey } from '@ngrx/signals/entities/src/models';

import { UserMe, UserProfile } from '@spark-rpg/shared-models';

import { UserRestService } from '../services/rest/user-rest.service';

interface UsersState {
  currentUser: UserMe;
  isUserMeLoading: boolean,
  isUsersLoading: boolean,
}

const initialState: UsersState = {
  currentUser: null,
  isUserMeLoading: false,
  isUsersLoading: false,
};

export const USERS_COLLECTION_KEY = 'username';
export const USERS_COLLECTION_NAME = 'users';

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState<UsersState>(initialState),
  withEntities({ entity: type<UserProfile>(), collection: USERS_COLLECTION_NAME }),
  withMethods((store) => {
    const userRestService: UserRestService = inject(UserRestService);

    const collectionSetterConfig: {
      collection: string;
      idKey: EntityIdKey<UserProfile>;
    } = {
      idKey: USERS_COLLECTION_KEY,
      collection: USERS_COLLECTION_NAME
    };

    return {
      async loadAll(): Promise<void> {
        const users: UserProfile[] = await userRestService.getAll();

        patchState(store, setAllEntities(users, collectionSetterConfig));
      },
      async loadOne(username: string): Promise<void> {
        const user: UserProfile = await userRestService.getOne(username);

        patchState(store, addEntity(user, collectionSetterConfig));
      },
      async loadCurrent(): Promise<UserMe> {
        const currentUser: UserMe = await userRestService.getCurrentUser();

        patchState(store, (state) => ({
          ...state,
          currentUser
        }));

        return currentUser;
      },
      reset(): void {
        patchState(store, () => initialState);
      }
    }
  }),
);
