import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { ValidationErrorKey, validationErrorMessageDictionary } from '@constants';

export function minimumAgeValidator(control: AbstractControl): { [key: string]: any } {
  const errorKey = ValidationErrorKey.UNDER_MINIMUM_AGE;
  const dateString = control.value;
  if (!dateString) {
    return null;
  }
  const birthDate = moment(dateString);
  const nowMinus18Years = moment();
  nowMinus18Years.subtract(18, 'year');
  const error = { [errorKey]: validationErrorMessageDictionary[errorKey] };

  return birthDate.isBefore(nowMinus18Years) ? null : error;
}
