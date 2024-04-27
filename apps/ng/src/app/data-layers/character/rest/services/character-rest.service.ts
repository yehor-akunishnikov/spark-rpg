import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '@spark-rpg/shared-models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterRestService {
  private http: HttpClient = inject(HttpClient);

  public getAll(): Observable<Character[]> {
    return this.http.get<Character[]>('/api/character');
  }

  public getOne(id: string): Observable<Character> {
    return this.http.get<Character>(`/api/character/${id}`);
  }

  public create(character: Character): Observable<Character> {
    return this.http.post<Character>('/api/character', character);
  }

  public update(character: Character): Observable<Character> {
    return this.http.put<Character>(`/api/character/${character.id}`, character);
  }

  public deleteOne(id: string): Observable<void> {
    return this.http.delete<void>(`/api/character/${id}`);
  }
}
