import { ValidationMessage } from './validation-message';

export class ValidationErrorKey {
  public static readonly CONTAINS_NUMBERS = 'containsNumbers';
  public static readonly UNDER_MINIMUM_AGE = 'underMinimumAge';
  public static readonly AGE_OVER_HUNDRED = 'ageOverHundred';
}

export const validationErrorMessageDictionary = {
  [ValidationErrorKey.CONTAINS_NUMBERS]: ValidationMessage.CONTAINS_NUMBERS,
  [ValidationErrorKey.UNDER_MINIMUM_AGE]: ValidationMessage.UNDER_MINIMUM_AGE,
  [ValidationErrorKey.AGE_OVER_HUNDRED]: ValidationMessage.AGE_OVER_HUNDRED
};
