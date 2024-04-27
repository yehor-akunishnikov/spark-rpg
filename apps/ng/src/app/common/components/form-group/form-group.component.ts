import { ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { AfterContentInit, ChangeDetectionStrategy, Component, Input, Optional, Self } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import { FormFieldErrorComponent } from '../form-field-error/form-field-error.component';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    FormFieldErrorComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent implements AfterContentInit, ControlValueAccessor {
  @Input() formControlName: string;
  @Input() placeholder = 'e.g. Ricardo';
  @Input() errorsMap: Record<string, string> = {};
  @Input() label = 'Label';
  @Input() type: 'text' | 'password' | 'number' | 'range' = 'text';
  @Input() inputType: 'input' | 'textarea' = 'input';
  @Input() class: string;
  @Input() isSubmitted = true;
  @Input() min: string = null;
  @Input() max: string = null;

  public control: FormControl;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl != null) {
      ngControl.valueAccessor = this;
    }
  }

  public writeValue(obj: any): void { }
  public registerOnChange(fn: any): void { }
  public registerOnTouched(fn: any): void { }
  public setDisabledState?(isDisabled: boolean): void { }

  public ngAfterContentInit(): void {
    const control = this.ngControl && this.ngControl.control;

    if (control) {
      this.control = control as FormControl;
    }
  }
}
