import { Component, Input } from '@angular/core';
import { EventDetailsViewModel } from '@models';

import { EventCommunicationService } from '../../services/event-communication.service';

@Component({
  selector: 'tc-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  @Input()
  public eventDetails: EventDetailsViewModel;

  constructor(private _eventCommunicationService: EventCommunicationService) {}

  public onCloseDetailsClicked() {
    this._eventCommunicationService.emitCloseDetailsClicked();
  }
}
