import { ControlValueAccessor, FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, NgControl, NgModel } from '@angular/forms';
import { Directive, inject } from '@angular/core';

export function injectNgControl(): FormControlDirective | FormControlName | NgModel {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) throw new Error('...');

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }

  throw new Error('No ngControl found');
}

@Directive({
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SimpleCvaDirective,
    },
  ],
})
export class SimpleCvaDirective implements ControlValueAccessor {
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
