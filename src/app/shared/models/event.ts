import { Band } from 'app/shared/models';

export class Event {
  id: number;
  date?: Date;
  band: string;
  motto: string;
  description: string;
  vorbands: Band[];
  homepage: string;
}
