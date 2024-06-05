import { Injectable } from '@angular/core';

import { GameTerritoryRowItem } from '@spark-rpg/shared-models';

@Injectable({
  providedIn: 'root'
})
export class BoundariesMapProcessorService {
  getRoadBoundariesMap(
    canvasSize: number,
    canvasContext: CanvasRenderingContext2D
  ): GameTerritoryRowItem[][] {
    const boundariesMap: GameTerritoryRowItem[][] = [];

    for (let y = 0; y < canvasSize; y++) {
      const row = [];
      let boundaryLine = [];

      for (let x = 0; x < canvasSize; x++) {
        if (this._isBoundaryStart(x, y, canvasContext)) {
          boundaryLine.push(x);
        }

        if (this._isBoundaryEnd(x, y, canvasContext)) {
          boundaryLine.push(x);
          row.push(boundaryLine);
          boundaryLine = [];
        }

        if (this._isBoundaryPeak(x, y, canvasContext)) {
          row.push(x);
        }
      }

      if (row.length) {
        boundariesMap.push(row);
      }
    }

    return boundariesMap;
  }

  private _isBoundaryPixel(x: number, y: number, canvasContext: CanvasRenderingContext2D): boolean {
    if (x <= 0) {
      return false;
    }

    return !canvasContext.getImageData(x, y, 1, 1).data[0];
  }

  private _isBoundaryStart(x: number, y: number, canvasContext: CanvasRenderingContext2D): boolean {
    const prevPixelX = x - 1;
    const nextPixelX = x + 1;

    return this._isBoundaryPixel(x, y, canvasContext) &&
      !this._isBoundaryPixel(prevPixelX, y, canvasContext) &&
      this._isBoundaryPixel(nextPixelX, y, canvasContext)
  }

  private _isBoundaryEnd(x: number, y: number, canvasContext: CanvasRenderingContext2D): boolean {
    const prevPixelX = x - 1;
    const nextPixelX = x + 1;

    return this._isBoundaryPixel(x, y, canvasContext) &&
      this._isBoundaryPixel(prevPixelX, y, canvasContext) &&
      !this._isBoundaryPixel(nextPixelX, y, canvasContext)
  }

  private _isBoundaryPeak(x: number, y: number, canvasContext: CanvasRenderingContext2D): boolean {
    const prevPixelX = x - 1;
    const nextPixelX = x + 1;

    return this._isBoundaryPixel(x, y, canvasContext) &&
      !this._isBoundaryPixel(prevPixelX, y, canvasContext) &&
      !this._isBoundaryPixel(nextPixelX, y, canvasContext)
  }
}
