import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

import { UserMe, UserProfile } from '@spark-rpg/shared-models';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  private readonly _http: HttpClient = inject(HttpClient);

  private readonly _apiSectionUrl = '/user';

  async getAll(): Promise<UserProfile[]> {
    return lastValueFrom(this._http.get<UserProfile[]>(this._apiSectionUrl));
  }

  async getOne(username: string): Promise<UserProfile> {
    return lastValueFrom(this._http.get<UserProfile>(`${this._apiSectionUrl}/${username}`));
  }

  async getCurrentUser(): Promise<UserMe> {
    return lastValueFrom(this._http.get<UserMe>(`${this._apiSectionUrl}/me`));
  }
}
