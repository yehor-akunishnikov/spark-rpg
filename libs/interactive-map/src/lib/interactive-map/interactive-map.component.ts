import { AfterViewInit, Component, DestroyRef, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';

import { fromEvent } from 'rxjs';

import { SvgDrawerComponent } from '../common/components/svg-drawer/svg-drawer.component';
import { TokenDrawerService } from '../common/services/drawers/token-drawer.service';
import { MapData, MapPointCoordinates } from '../common/models';

@Component({
  selector: 'spark-ui-interactive-map',
  standalone: true,
  imports: [
    SvgDrawerComponent,
    NgOptimizedImage,
  ],
  providers: [
    TokenDrawerService
  ],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.scss',
})
export class InteractiveMapComponent implements AfterViewInit {
  private readonly _tokenDrawerService: TokenDrawerService = inject(TokenDrawerService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  @Input() mapData: MapData | null = null;
  @Input() canvasSize = 500;

  @ViewChild('canvas') private readonly _canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('background') private readonly _background: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const canvasElement = this._canvas.nativeElement;

    this._tokenDrawerService.setCanvasData(canvasElement, this.mapData);

    fromEvent(canvasElement, 'click').pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe((event: MouseEvent) => {
      this._tokenDrawerService.drawPin(this._getCoordinatesFromEvent(event));
    });
  }

  private _getCoordinatesFromEvent(event: MouseEvent): MapPointCoordinates {
    const rect = (event.target as HTMLCanvasElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    return {x, y};
  }
}
