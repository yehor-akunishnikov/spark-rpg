import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoginPayload, RegisterPayload } from '@spark-rpg/shared-models';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {
  private http: HttpClient = inject(HttpClient);

  public login(loginPayload: LoginPayload): Observable<void> {
    return this.http.post<void>('/api/login', loginPayload);
  }

  public register(registerPayload: RegisterPayload): Observable<void> {
    return this.http.post<void>('/api/register', registerPayload);
  }

  public logout(): Observable<void> {
    return this.http.get<void>('/api/logout');
  }
}
