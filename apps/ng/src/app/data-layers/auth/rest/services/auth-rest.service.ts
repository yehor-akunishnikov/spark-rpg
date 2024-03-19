import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginPayload, LoginResponse, RegisterPayload } from '@spark-rpg/shared-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {
  private http: HttpClient = inject(HttpClient);

  public login(loginPayload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/login', loginPayload);
  }

  public register(registerPayload: RegisterPayload): Observable<void> {
    return this.http.post<void>('/api/register', registerPayload);
  }
}
