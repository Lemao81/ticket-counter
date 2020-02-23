export class ValidationMessage {
  public static readonly REQUIRED = 'Eingabe ist erforderlich';
  public static readonly MIN = 'Mindestmenge ist unterschritten';
  public static readonly MAX = 'Höchstmenge ist überschritten';
  public static readonly EMAIL = 'Kein gültiges Email-Format';
  public static readonly CONTAINS_NUMBERS = 'Im Text dürfen keine Zahlen enthalten sein';
  public static readonly UNDER_MINIMUM_AGE = 'Mindestalter ist 18 Jahre';
  public static readonly AGE_OVER_HUNDRED = 'Über 100? Sehr unwahrscheinlich...';
}
