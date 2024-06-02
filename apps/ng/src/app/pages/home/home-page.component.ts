import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InteractiveMapComponent, MapData, maps, MAP_NAMES } from '@spark-rpg/interactive-map';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    InteractiveMapComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  readonly mapData: MapData = maps[MAP_NAMES.OAKVALE];
}
