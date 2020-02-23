import { InjectionToken } from '@angular/core';
import { ILogger } from '@interfaces';

import consoleLoggerFactory from './loggers/console-logger';

export const LOGGER = new InjectionToken<ILogger>('logger', { providedIn: 'root', factory: consoleLoggerFactory });
