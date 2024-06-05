import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject, Injectable } from '@angular/core';

import { filter, fromEvent, map, Observable, share, startWith } from 'rxjs';

import { MapLocation, MapPointCoordinates, UIMapMetadata } from '@spark-rpg/shared-models';

import { InteractiveMapComponent } from '../../../interactive-map/interactive-map.component';
import { CoordinateUtilsService } from '../coorditate-utils/coordinate-utils.service';

@Injectable({
  providedIn: InteractiveMapComponent
})
export class PlayerMovementTrackerService {
  private readonly _coordinateUtilsService: CoordinateUtilsService = inject(CoordinateUtilsService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  playerPositionStream$: Observable<MapPointCoordinates>;
  locationCollisionStream$: Observable<MapLocation>;

  init(canvasElement: HTMLCanvasElement, mapMetadata: UIMapMetadata): void {
    this.playerPositionStream$ = this._getPlayerPositionStream(canvasElement, mapMetadata);
    this.locationCollisionStream$ = this._getLocationCollisionStream(mapMetadata);
  }

  private _getPlayerPositionStream(
    canvasElement: HTMLCanvasElement,
    {gameTerritory}: UIMapMetadata
  ): Observable<MapPointCoordinates> {
    return fromEvent<MouseEvent>(canvasElement, 'click').pipe(
      takeUntilDestroyed(this._destroyRef),
      map(event => this._coordinateUtilsService.getCoordinatesFromEvent(event)),
      filter(point => this._coordinateUtilsService.isCollidingWithBoundary(point, gameTerritory)),
      startWith({x: 300, y: 300}),
      share()
    );
  }

  private _getLocationCollisionStream({locations}: UIMapMetadata): Observable<MapLocation> {
    return this.playerPositionStream$.pipe(
      map(position => Array.from(locations).find(
        location => this._coordinateUtilsService.isCollidingWithLocation(position, location.position)
      )),
      filter(location => !!location)
    );
  }
}
