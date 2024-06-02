import { Injectable } from '@angular/core';

import { InteractiveMapComponent } from '../../../interactive-map/interactive-map.component';
import { MapData, MapPointCoordinates } from '../../models';

@Injectable({
  providedIn: InteractiveMapComponent
})
export class TokenDrawerService {
  private _gameTerritory: (number | [number, number])[][];
  private _ctx: CanvasRenderingContext2D;
  private _canvasSize: number;

  public setCanvasData(canvas: HTMLCanvasElement, mapData: MapData): void {
    this._ctx = canvas.getContext('2d');
    this._canvasSize = canvas.width;
    this._gameTerritory = mapData.gameTerritory;
  }

  drawPin({x, y}: MapPointCoordinates): void {
    if (this.isPinCollidesWithBoundary({x, y})) {
      this._ctx.clearRect(0, 0, this._canvasSize, this._canvasSize);
      this._drawCircle(5, {x, y}, 'blue');
    }
  }

  private _drawCircle(size: number, mapPointCoordinates: MapPointCoordinates, color: string): void {
    this._ctx.beginPath();
    this._ctx.arc(
      mapPointCoordinates.x + size / 6,
      mapPointCoordinates.y + size / 4,
      size,
      0,
      2 * Math.PI
    );
    this._ctx.fillStyle = color;
    this._ctx.fill();
  }

  isPinCollidesWithBoundary({x, y}: MapPointCoordinates): boolean {
    return !!this._gameTerritory[y]?.some(boundary => {
      if (Array.isArray(boundary)) {
        return x >= boundary[0] && x <= boundary[1];
      } else {
        return x === boundary;
      }
    });
  }
}
