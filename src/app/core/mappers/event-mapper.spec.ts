import { BandMapper } from './band-mapper';
import { EventMapper } from './event-mapper';

describe('EventMapper', () => {
  it('should create an instance', () => {
    expect(new EventMapper(new BandMapper())).toBeTruthy();
  });
});
