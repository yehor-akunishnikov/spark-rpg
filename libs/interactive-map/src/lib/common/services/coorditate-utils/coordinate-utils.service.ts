import { Injectable } from '@angular/core';

import { GameTerritoryRowItem, MapLocationCoordinates, MapPointCoordinates } from '@spark-rpg/shared-models';

import { InteractiveMapComponent } from '../../../interactive-map/interactive-map.component';

@Injectable({
  providedIn: InteractiveMapComponent
})
export class CoordinateUtilsService {
  getCoordinatesFromEvent(event: MouseEvent): MapPointCoordinates {
    const rect = (event.target as HTMLCanvasElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return {x, y};
  }

  isCollidingWithLocation(
    position: MapPointCoordinates,
    location: MapLocationCoordinates
  ): boolean {

    return position.x >= location.leftTopCorner.x &&
      position.x <= location.rightBottomCorner.x &&
      position.y >= location.leftTopCorner.y &&
      position.y <= location.rightBottomCorner.y;
  }

  isCollidingWithBoundary(
    {x, y}: MapPointCoordinates,
    gameTerritory: GameTerritoryRowItem[][]
  ): boolean {
    return !!gameTerritory[y]?.some((boundary: number | [number, number]) => {
      if (Array.isArray(boundary)) {
        return x >= boundary[0] && x <= boundary[1];
      } else {
        return x === boundary;
      }
    });
  }
}
