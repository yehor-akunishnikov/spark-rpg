import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UserProfile } from '@spark-rpg/shared-models';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  private http: HttpClient = inject(HttpClient);

  public getOne(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`/api/user/${username}`);
  }
}
