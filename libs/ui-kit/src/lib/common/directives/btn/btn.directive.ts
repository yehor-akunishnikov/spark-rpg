import { Directive, HostBinding, Input } from '@angular/core';

export const btnColorsMap = {
  primary: 'text-white border-orange-700' +
    ' bg-orange-600' +
    ' hover:bg-orange-500 focus-visible:ring-orange-400 active:bg-orange-600' +
    ' dark:bg-orange-600' +
    ' dark:hover:bg-orange-500 dark:focus-visible:ring-orange-300 dark:active:bg-orange-600',

    danger: 'text-white border-red-700' +
    ' bg-red-600' +
    ' hover:bg-red-500 focus-visible:ring-red-400 active:bg-red-600' +
    ' dark:bg-red-600' +
    ' dark:hover:bg-red-500 dark:focus-visible:ring-red-300 dark:active:bg-red-600'
};

export const btnSizesMap = {
  xs: 'px-5 py-1.5 text-xs',
  sm: 'px-7 py-1.5 text-sm',
  md: 'px-8 py-2 text-sm',
  lg: 'px-9 py-2.5 text-base',
  xl: 'px-11 py-3.5 text-base'
};

export const btnWidthModesMap = {
  default: 'inline-block',
  full: 'block w-full'
};

export type BtnColor = 'primary' | 'danger';

export enum BTN_COLORS {
  PRIMARY = 'primary',
  DANGER = 'danger'
}

export type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export enum BTN_SIZES {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export type BtnWidthMode = 'default' | 'full';

export enum BTN_WIDTH_MODES {
  DEFAULT = 'default',
  FULL = 'full'
}

@Directive({
  selector: '[sparkUiBtn]',
  standalone: true,
})
export class BtnDirective {
  private readonly _baseClass: string = 'font-medium text-center rounded-lg border box-border' +
    ' focus-visible:ring-2 focus-visible:outline-none transition-colors';

  private _colorClass = btnColorsMap[BTN_COLORS.PRIMARY];
  private _sizeClass = btnSizesMap[BTN_SIZES.MD];
  private _widthClass = btnWidthModesMap[BTN_WIDTH_MODES.DEFAULT];

  @Input() set color(color: BtnColor) {
    this._colorClass = btnColorsMap[color];
  }

  @Input() set size(size: BtnSize) {
    this._sizeClass = btnSizesMap[size];
  }

  @Input() set withMode(withMode: BtnWidthMode) {
    this._widthClass = btnWidthModesMap[withMode];
  }

  @HostBinding('class')
  get className(): string {
    return this._getClassName();
  }

  private _getClassName(): string {
    return [
      this._baseClass, this._sizeClass,
      this._colorClass, this._widthClass
    ].join(' ');
  }
}
