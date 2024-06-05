import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

import { SVG_MAP_DATA_ELEMENT_TYPES, UIMap } from '@spark-rpg/shared-models';

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

  @Input() map: UIMap | null = null;
  @Input() size: number;
  @Input() fill: string;
  @Input() viewBox: string;

  @ViewChild('road') private readonly _road: ElementRef<SVGPathElement>;

  ngAfterViewInit(): void {
    console.log(this._road.nativeElement);
  }
}
