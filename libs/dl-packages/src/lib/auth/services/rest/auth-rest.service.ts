import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LoginPayload, RegisterPayload } from '@spark-rpg/shared-models';

import { AuthDlModule } from '../../auth-dl.module';

@Injectable({
  providedIn: AuthDlModule
})
export class AuthRestService {
  private readonly _http: HttpClient = inject(HttpClient);

  private readonly _apiSectionUrl = '/auth';

  register(registerPayload: RegisterPayload): Observable<RegisterPayload> {
    return this._http.post<RegisterPayload>(`${this._apiSectionUrl}/register`, registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<LoginPayload> {
    return this._http.post<LoginPayload>(`${this._apiSectionUrl}/login`, loginPayload);
  }

  logout(): Observable<void> {
    return this._http.get<void>(`${this._apiSectionUrl}/logout`);
  }
}
