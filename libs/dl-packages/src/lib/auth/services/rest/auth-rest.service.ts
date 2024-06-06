import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

import { LoginPayload, RegisterPayload } from '@spark-rpg/shared-models';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {
  private readonly _http: HttpClient = inject(HttpClient);

  private readonly _apiSectionUrl = 'auth';
  private readonly _httpSettings = {
    withCredentials: true
  };

  async register(registerPayload: RegisterPayload): Promise<void> {
    return lastValueFrom(
      this._http.post<void>(`${this._apiSectionUrl}/register`, registerPayload, this._httpSettings)
    );
  }

  async login(loginPayload: LoginPayload): Promise<void> {
    return lastValueFrom(
      this._http.post<void>(`${this._apiSectionUrl}/login`, loginPayload, this._httpSettings)
    );
  }

  async logout(): Promise<void> {
    return lastValueFrom(
      this._http.get<void>(`${this._apiSectionUrl}/logout`, this._httpSettings)
    );
  }
}
