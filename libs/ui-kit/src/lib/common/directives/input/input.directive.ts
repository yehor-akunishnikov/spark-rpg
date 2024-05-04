import { Directive, HostBinding, Input } from '@angular/core';

export const inputColorsMap = {
  default: 'border-gray-300 bg-gray-50 focus:ring-orange-500 focus:border-orange-500' +
    ' dark:bg-gray-700 dark:border-gray-500 dark:text-white' +
    ' dark:focus:ring-orange-500 dark:focus:border-orange-500' +
    ' disabled:bg-gray-100 dark:disabled:bg-gray-600' +
    ' dark:disabled:border-gray-500',
  error: 'border-red-500 bg-red-50 focus:ring-red-500 focus:border-red-500' +
    ' dark:bg-gray-700 dark:border-red-500 dark:text-red-500' +
    ' dark:focus:ring-red-500 dark:focus:border-red-500' +
    ' disabled:bg-red-100 dark:disabled:bg-gray-600' +
    ' dark:disabled:border-red-400'
};

export const inputSizesMap = {
  sm: 'p-2 text-xs',
  md: 'p-2.5 text-sm',
  lg: 'p-4 text-base'
};

export type InputColor = 'default' | 'error';

export enum INPUT_COLORS {
  DEFAULT = 'default',
  ERROR = 'error'
}

export type InputSize = 'sm' | 'md' | 'lg';

export enum INPUT_SIZES {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

@Directive({
  selector: '[sparkUiInput]',
  standalone: true,
})
export class InputDirective {
  private readonly _baseClass: string = 'block w-full border rounded-lg disabled:cursor-not-allowed' +
    ' text-gray-900 dark:placeholder-gray-400';

  private _sizeClass = inputSizesMap[INPUT_SIZES.MD];
  private _colorClass = inputColorsMap[INPUT_COLORS.DEFAULT];

  @Input() set size(size: InputSize) {
    this._sizeClass = inputSizesMap[size];
  }

  @Input() set hasError(hasError: boolean) {
    this._colorClass = hasError ?
      inputColorsMap[INPUT_COLORS.ERROR] :
      inputColorsMap[INPUT_COLORS.DEFAULT];
  }

  @HostBinding('class')
  get className(): string {
    return this._getClassName();
  }

  private _getClassName(): string {
    return [
      this._baseClass, this._sizeClass,
      this._colorClass
    ].join(' ');
  }
}
