import { AbstractControl } from '@angular/forms';
import { ValidationErrorKey, validationErrorMessageDictionary } from '@constants';

export function containsNoNumberValidator(control: AbstractControl): { [key: string]: any } {
  const errorKey = ValidationErrorKey.CONTAINS_NUMBERS;

  return control.value.match(/^[0-9]+$/) ? null : { [errorKey]: validationErrorMessageDictionary[errorKey] };
}
