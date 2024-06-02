import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { AsyncPipe, NgIf } from '@angular/common';

import { InteractiveMapComponent, maps } from '@spark-rpg/interactive-map';
import { Map, MapMetadata } from '@spark-rpg/shared-models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    InteractiveMapComponent,
    NgIf,
    AsyncPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  private _http: HttpClient = inject(HttpClient);

  map$: Observable<Map> = this._http.get<MapMetadata[]>('map').pipe(
    map(mapMetadata => {
      const mapUiData = maps[mapMetadata[0].name];

      return {...mapMetadata[0], uiData: mapUiData};
    })
  );
}
