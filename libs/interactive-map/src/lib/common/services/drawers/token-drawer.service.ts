import { Injectable } from '@angular/core';

import { MapPointCoordinates } from '@spark-rpg/shared-models';

import { InteractiveMapComponent } from '../../../interactive-map/interactive-map.component';

@Injectable({
  providedIn: InteractiveMapComponent
})
export class TokenDrawerService {
  private _ctx: CanvasRenderingContext2D;
  private _canvasSize: number;

  public init(canvas: HTMLCanvasElement): void {
    this._ctx = canvas.getContext('2d');
    this._canvasSize = canvas.width;
  }

  drawPin({x, y}: MapPointCoordinates): void {
    console.log(x, y);
    this._ctx.clearRect(0, 0, this._canvasSize, this._canvasSize);
    this._drawCircle(5, {x, y}, 'blue');
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
}
