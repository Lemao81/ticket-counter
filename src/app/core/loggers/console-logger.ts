import { ILogger } from '@interfaces';

export class ConsoleLogger implements ILogger {
  log(message?: any, ...optionalParams: any[]): void {
    console.log(message, optionalParams);
  }

  logError(message?: any, ...optionalParams: any[]): void {
    console.error(message, optionalParams);
  }
}

const consoleLoggerFactory = () => new ConsoleLogger();
export default consoleLoggerFactory;
