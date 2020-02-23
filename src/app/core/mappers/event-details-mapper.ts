import 'automapper-ts';

import { Injectable } from '@angular/core';
import { Event, EventDetailsViewModel } from '@models';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsMapper {
  constructor() {
    automapper
      .createMap('Event', 'EventDetailsViewModel')
      .forSourceMember('vorbands', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  public mapToDetails(event: Event): EventDetailsViewModel {
    const details = automapper.map('Event', 'EventDetailsViewModel', event);
    details.vorbands = event.vorbands.map(_ => _.name);

    return details;
  }
}
