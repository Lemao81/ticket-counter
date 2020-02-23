export class ValidationErrorKey {
  public static readonly CONTAINS_NUMBERS = 'containsNumbers';
  public static readonly UNDER_MINIMUM_AGE = 'underMinimumAge';
  public static readonly AGE_OVER_HUNDRED = 'ageOverHundred';
}

export const validationErrorMessageDictionary = {
  [ValidationErrorKey.CONTAINS_NUMBERS]: 'Im Text dürfen keine Zahlen enthalten sein',
  [ValidationErrorKey.UNDER_MINIMUM_AGE]: 'Mindestalter ist 18 Jahre',
  [ValidationErrorKey.AGE_OVER_HUNDRED]: 'Über 100? Sehr unwahrscheinlich...'
};
