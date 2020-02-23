import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { ValidationErrorKey, validationErrorMessageDictionary } from '@constants';

export function ageOverHundredValidator(control: AbstractControl): { [key: string]: any } {
  const errorKey = ValidationErrorKey.AGE_OVER_HUNDRED;
  const dateString = control.value;
  if (!dateString) {
    return null;
  }
  const birthDate = moment(dateString);
  const now = moment();
  const difference = now.diff(birthDate, 'years');
  const error = { [errorKey]: validationErrorMessageDictionary[errorKey] };

  return difference <= 100 ? null : error;
}
