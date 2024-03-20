import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { NgClass } from '@angular/common';

import { ErrorTitlePipe } from '../../pipes/error-title.pipe';

@Component({
  selector: 'app-form-field-error',
  standalone: true,
  imports: [
    ErrorTitlePipe,
    NgClass
  ],
  templateUrl: './form-field-error.component.html',
  styleUrl: './form-field-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldErrorComponent {
  @Input() errors: ValidationErrors = {};
  @Input() errorsMap: Record<string, string> = {};
  @Input() isSubmitted = false;
}
