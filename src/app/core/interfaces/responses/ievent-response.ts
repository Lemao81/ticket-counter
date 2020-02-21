import { IEventDto } from '@interfaces';

export interface IEventResponse {
  logId?: string;
  statusCode?: string;
  meldungen?: string[];
  result?: {
    event?: IEventDto;
  };
}
