import { IBandDto } from '@interfaces';

export interface IEventDto {
  date?: string;
  band?: string;
  motto?: string;
  description?: string;
  vorbands?: IBandDto[];
  homepage?: string;
}
