import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';

import { MapsStore, MapsStoreInstance } from '@spark-rpg/dl-packages';

@Component({
  selector: 'app-maps-configuration-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './maps-configuration-page.component.html',
  styleUrl: './maps-configuration-page.component.scss'
})
export class MapsConfigurationPageComponent {
  readonly mapsStore: MapsStoreInstance = inject(MapsStore);
}
