import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorTitle',
  standalone: true
})
export class ErrorTitlePipe implements PipeTransform {
  transform(errors: ValidationErrors | null, errorsMap: Record<string, string>): string {
    if (errors) {
      const errorKey = Object.keys(errorsMap).find(key => Object.keys(errors).includes(key));

      return errorsMap[errorKey] ?? 'Unknown error';
    } else {
      return 'Valid';
    }
  }
}
