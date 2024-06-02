import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

import { MapData, SVG_MAP_DATA_ELEMENT_TYPES } from '../../models';
import { fromEvent, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'spark-ui-svg-drawer',
  standalone: true,
  imports: [
    NgForOf,
    NgSwitchCase,
    NgSwitch,
    NgIf
  ],
  templateUrl: './svg-drawer.component.html',
  styleUrl: './svg-drawer.component.scss'
})
export class SvgDrawerComponent implements AfterViewInit {
  readonly SVG_MAP_DATA_ELEMENT_TYPES = SVG_MAP_DATA_ELEMENT_TYPES;

  @Input() mapData: MapData | null = null;
  @Input() size: number;
  @Input() fill: string;
  @Input() viewBox: string;

  @ViewChild('road') private readonly _road: ElementRef<SVGPathElement>;

  ngAfterViewInit() {
    console.log(this._road.nativeElement);
  }
}
