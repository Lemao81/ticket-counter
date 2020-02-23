import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QueryParam } from '@constants';
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

  constructor(private _eventCommunicationService: EventCommunicationService, private _router: Router) {}

  public onCloseDetailsClicked() {
    this._eventCommunicationService.emitCloseDetailsClicked();
  }

  public navigateToOrderPage() {
    const queryParams = {};
    queryParams[QueryParam.ID] = this.eventDetails.id;
    queryParams[QueryParam.BAND] = this.eventDetails.band;
    queryParams[QueryParam.DATE] = this.eventDetails.date.toJSON();
    this._router.navigate(['/page/order'], { queryParams });
  }
}
