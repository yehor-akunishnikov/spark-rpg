import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { KeyValuePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { injectNgControl, SimpleCvaDirective } from '../../directives/simple-cva/simple-cva.directive';
import { AlarmTextDirective } from '../../directives/alarm-text/alarm-text.directive';
import { InputDirective } from '../../directives/input/input.directive';

export type InputGroupSize = 'sm' | 'md' | 'lg';

export enum INPUT_GROUP_SIZES {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

export const errorsMap: Record<string, string> = {
  required: 'This field is required',
};

export type ErrorsMap = Record<string, string>;

@Component({
  selector: 'spark-ui-input-group',
  standalone: true,
  hostDirectives: [SimpleCvaDirective],
  imports: [
    AlarmTextDirective,
    InputDirective,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    KeyValuePipe,
    NgClass
  ],
  templateUrl: './input-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputGroupComponent {
  readonly spacingClassesMap = {
    sm: {
      container: 'mb-6',
      error: '-bottom-5'
    },
    md: {
      container: 'mb-6',
      error: '-bottom-6'
    },
    lg: {
      container: 'mb-8',
      error: '-bottom-7'
    }
  };

  @Input() formControlName = null;
  @Input() id = '';
  @Input() size: InputGroupSize = 'md';
  @Input() errorsConfig: Record<string, string> = errorsMap;
  @Input() label = 'Default label';
  @Input() type: 'text' | 'number' | 'password' = 'text';

  ngControl = injectNgControl();
}
