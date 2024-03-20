import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordsNotEqualValidator() {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password');
    const repeatPassword = formGroup.get('repeatPassword');

    if (password.value !== repeatPassword.value) {
      repeatPassword.setErrors({ passwordsEquality: true });
    } else {
      repeatPassword.setErrors(null);
    }

    return null;
  };
}
