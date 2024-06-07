import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

import { MapMetadata, MapMetadataUpdatePayload } from '@spark-rpg/shared-models';

@Injectable({
  providedIn: 'root'
})
export class MapRestService {
  private readonly _http: HttpClient = inject(HttpClient);

  private readonly _apiSectionUrl = 'map';

  async getAll(): Promise<MapMetadata[]> {
    return lastValueFrom(this._http.get<MapMetadata[]>(this._apiSectionUrl));
  }

  async getOne(id: string): Promise<MapMetadata> {
    return lastValueFrom(this._http.get<MapMetadata>(`${this._apiSectionUrl}/${id}`));
  }

  async create(mapMetadata: MapMetadata): Promise<MapMetadata> {
    return lastValueFrom(this._http.post<MapMetadata>(this._apiSectionUrl, mapMetadata));
  }

  async update(id: string, mapMetadataUpdatePayload: MapMetadataUpdatePayload): Promise<MapMetadata> {
    return lastValueFrom(this._http.put<MapMetadata>(`${this._apiSectionUrl}/${id}`, mapMetadataUpdatePayload));
  }

  async deleteOne(id: string): Promise<void> {
    return lastValueFrom(this._http.delete<void>(`${this._apiSectionUrl}/${id}`));
  }
}
