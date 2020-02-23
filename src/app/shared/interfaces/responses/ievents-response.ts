import { IEventDto } from '@interfaces';

export interface IEventsResponse {
  LogId?: string;
  StatusCode?: string;
  Meldungen?: string[];
  Result?: {
    events?: IEventDto[];
  };
}
