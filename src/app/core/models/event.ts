import { Band } from '@models';

export class Event {
  date?: Date;
  band: string;
  motto: string;
  description: string;
  vorbands: Band[];
  homepage: string;
}
