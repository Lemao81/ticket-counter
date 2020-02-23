export interface ILogger {
  log(message?: any, ...optionalParams: any[]): void;
  logError(message?: any, ...optionalParams: any[]): void;
}
