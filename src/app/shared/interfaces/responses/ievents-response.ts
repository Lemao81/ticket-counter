import { IEventDto } from '../dtos/ievent-dto';

export interface IEventsResponse {
  logId?: string;
  statusCode?: string;
  meldungen?: string[];
  result?: {
    events?: IEventDto[];
  };
}
