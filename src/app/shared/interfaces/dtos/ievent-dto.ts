import { IBandDto } from 'app/shared/interfaces';

export interface IEventDto {
  id?: number;
  date?: string;
  band?: string;
  motto?: string;
  description?: string;
  vorbands?: IBandDto[];
  homepage?: string;
}
