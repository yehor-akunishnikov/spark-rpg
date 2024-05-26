import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum LAYOUT_TYPES {
  DEFAULT = 'Default',
  AUTH = 'Auth',
}

@Component({
  selector: 'spark-ui-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @Input() layoutType: LAYOUT_TYPES = LAYOUT_TYPES.DEFAULT;

  readonly containerClassesMap: Record<LAYOUT_TYPES, string> = {
    [LAYOUT_TYPES.DEFAULT]: 'main-container',
    [LAYOUT_TYPES.AUTH]: 'main-container-auth flex items-center justify-center'
  }
  protected readonly LAYOUT_TYPES = LAYOUT_TYPES;
}
