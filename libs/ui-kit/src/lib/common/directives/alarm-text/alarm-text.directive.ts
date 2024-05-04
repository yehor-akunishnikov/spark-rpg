import { Directive, HostBinding, Input } from '@angular/core';

export const alarmTextColorsMap = {
  success: 'text-green-600 dark:text-green-500',
  error: 'text-red-600 dark:text-red-500',
  default: ''
};

export const alarmTextSizesMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

export type AlarmTextColor = 'success' | 'error' | 'default';

export enum ALARM_TEXT_COLORS {
  SUCCESS = 'success',
  ERROR = 'error',
  DEFAULT = 'default'
}

export type AlarmTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export enum ALARM_TEXT_SIZES {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

@Directive({
  selector: '[sparkUiAlarmText]',
  standalone: true,
})
export class AlarmTextDirective {
  private _colorClass = alarmTextColorsMap[ALARM_TEXT_COLORS.DEFAULT];
  private _sizeClass = alarmTextSizesMap[ALARM_TEXT_SIZES.MD];

  @Input() set color(color: AlarmTextColor) {
    this._colorClass = alarmTextColorsMap[color];
  }

  @Input() set size(size: AlarmTextSize) {
    this._sizeClass = alarmTextSizesMap[size];
  }

  @HostBinding('class')
  get className(): string {
    return this._getClassName();
  }

  private _getClassName(): string {
    return [
      this._colorClass, this._sizeClass
    ].join(' ');
  }
}
