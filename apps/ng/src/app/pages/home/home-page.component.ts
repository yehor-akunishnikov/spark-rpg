import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

import { map, Observable } from 'rxjs';

import { InteractiveMapComponent, maps } from '@spark-rpg/interactive-map';
import { UIMap, MapMetadata, MapLocation } from '@spark-rpg/shared-models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    InteractiveMapComponent,
    NgIf,
    AsyncPipe,
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  private _http: HttpClient = inject(HttpClient);
  illustration: string | null = null;

  map$: Observable<UIMap> = this._http.get<MapMetadata[]>('map').pipe(
    map(mapMetadataList => this._createMapFromMetadata(mapMetadataList[0]))
  );

  private _createMapFromMetadata(mapMetadata: MapMetadata): UIMap {
    const svgData = maps[mapMetadata.name];

    return {
      metadata: {
        ...mapMetadata,
        gameTerritory: mapMetadata.gameTerritory.map(row => {
          return row.split(';').map(cell => {
            const cellData = cell.split('.').map(Number);

            return cellData.length === 1 ? cellData[0] : [cellData[0], cellData[1]];
          });
        }),
        locations: mapMetadata.locations.map(location => {
          const [leftCorner, rightCorner] = location.position.split(';');
          const [leftX, leftY] = leftCorner.split('.').map(Number);
          const [rightX, rightY] = rightCorner.split('.').map(Number);

          return {
            ...location,
            position: {
              leftTopCorner: {x: leftX, y: leftY},
              rightBottomCorner: {x: rightX, y: rightY}
            }
          }
        })
      },
      svgData
    };
  }

  onLocationChange(mapLocation: MapLocation) {
    this.illustration = mapLocation.illustration;
  }
}
