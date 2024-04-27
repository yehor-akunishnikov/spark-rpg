import { inject, Injectable, signal, WritableSignal } from '@angular/core';

import { catchError, Observable, of, tap } from 'rxjs';

import { UserMe } from '@spark-rpg/shared-models';

import { UserRestService } from '../../rest/services/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userRestService: UserRestService = inject(UserRestService);

  public currentUser: WritableSignal<UserMe> = signal<UserMe>(null);

  public loadCurrent(): Observable<UserMe> {
    return this.userRestService.getCurrent().pipe(
      catchError(() => of(null)),
      tap((currentUser) => {
        this.currentUser.set(currentUser);
      }),
    );
  }
}
