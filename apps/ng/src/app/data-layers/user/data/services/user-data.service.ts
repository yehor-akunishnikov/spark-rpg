import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { UserMe } from '@spark-rpg/shared-models';

import { UserRestService } from '../../rest/services/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userRestService: UserRestService = inject(UserRestService);

  private currentUserState: BehaviorSubject<UserMe> = new BehaviorSubject<UserMe>(null);
  public currentUser$: Observable<UserMe> = this.currentUserState.asObservable();

  public getCurrent(): Observable<UserMe> {
    return this.userRestService.getCurrent().pipe(
      tap((currentUser) => {
        this.currentUserState.next(currentUser);
      }),
    );
  }
}
