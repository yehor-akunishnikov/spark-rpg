import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,
  EventEmitter, inject, Input, OnChanges, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { Subject, takeUntil } from 'rxjs';

import { MapLocation, UIMap } from '@spark-rpg/shared-models';

import { PlayerMovementTrackerService } from '../common/services/trackers/player-movement-tracker.service';
import { CoordinateUtilsService } from '../common/services/coorditate-utils/coordinate-utils.service';
import { SvgDrawerComponent } from '../common/components/svg-drawer/svg-drawer.component';
import { TokenDrawerService } from '../common/services/drawers/token-drawer.service';

@Component({
  selector: 'spark-ui-interactive-map',
  standalone: true,
  imports: [
    SvgDrawerComponent,
    NgOptimizedImage,
  ],
  providers: [
    TokenDrawerService,
    CoordinateUtilsService,
    PlayerMovementTrackerService,
  ],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveMapComponent implements AfterViewInit, OnChanges {
  private readonly _userMovementTrackerService: PlayerMovementTrackerService = inject(PlayerMovementTrackerService);
  private readonly _tokenDrawerService: TokenDrawerService = inject(TokenDrawerService);

  private readonly _resetSubscriptionsSteam$: Subject<void> = new Subject<void>();

  @Input() map: UIMap | null = null;
  @Input() canvasSize = 500;

  @Output() locationChanged: EventEmitter<MapLocation> = new EventEmitter<MapLocation>();

  @ViewChild('canvas') private readonly _canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('background') private readonly _background: ElementRef<HTMLDivElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['map']?.firstChange) {
      this._initMap();
    }
  }

  ngAfterViewInit(): void {
    this._tokenDrawerService.init(this._canvas.nativeElement);
    this._initMap();
  }

  debug(): void {
  //
  }

  private _initMap(): void {
    this._userMovementTrackerService.init(this._canvas.nativeElement, this.map.metadata);
    this._setMapListeners();
  }

  private _setMapListeners(): void {
    this._resetSubscriptionsSteam$.next();

    this._userMovementTrackerService.playerPositionStream$.pipe(
      takeUntil(this._resetSubscriptionsSteam$)
    ).subscribe({
      next: (position) => {
        this._tokenDrawerService.drawPin(position);
      },
    });

    this._userMovementTrackerService.locationCollisionStream$.pipe(
      takeUntil(this._resetSubscriptionsSteam$)
    ).subscribe({
      next: (mapLocation) => this.locationChanged.emit(mapLocation)
    });
  }
}
