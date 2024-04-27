import { ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, forwardRef, inject, Injector, Input, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';
import { BtnDirective } from '../../directives/btn.directive';

export interface RadioOption<T = string> {
  name: string;
  value: T;
}

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [
    NgForOf,
    BtnDirective,
    FormFieldErrorComponent,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements ControlValueAccessor, OnInit {
  private injector: Injector = inject(Injector);

  @Input() label: string;
  @Input() options: RadioOption[] = [];
  @Input() isSubmitted = true;
  @Input() errorsMap: Record<string, string> = {};

  public selectedOption: string = null;
  public control: FormControl;

  public ngOnInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl);

    if (ngControl instanceof FormControlName) {
      this.control = this.injector.get(FormGroupDirective).getControl(ngControl);
    } else {
      this.control = (ngControl as FormControlDirective).form as FormControl;
    }
  }

  public onSelect(option: RadioOption): void {
    this.selectedOption = option.value;
    this.onChange(option.value);
    this.onTouched(option.value);
  }

  public writeValue(value: string): void {
    this.selectedOption = value;
  }

  public onChange(option: string): void {}
  public onTouched(option: string): void {}

  public registerOnChange(fn: (option: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (option: string) => void): void {
    this.onTouched = fn;
  }
}
