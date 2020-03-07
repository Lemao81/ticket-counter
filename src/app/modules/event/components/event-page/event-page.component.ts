import { Component, OnDestroy } from '@angular/core';
import { EventDetailsMapper } from '@mappers';
import { Event, EventDetailsViewModel } from '@models';
import { Subscription } from 'rxjs';

import { EventCommunicationService } from '../../services/event-communication.service';

@Component({
  selector: 'tc-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnDestroy {
  private subscriptions = new Subscription();

  public isShowingDetails: boolean;
  public eventDetails: EventDetailsViewModel;

  constructor(_eventCommunicationService: EventCommunicationService, private _eventDetailsMapper: EventDetailsMapper) {
    this.subscriptions.add(
      _eventCommunicationService.eventItemClicked$.subscribe(event => this.onEventItemClicked.bind(this)(event))
    );
    this.subscriptions.add(
      _eventCommunicationService.closeDetailsClicked$.subscribe(_ => this.onCloseDetailsClicked.bind(this)())
    );
  }

  public onEventItemClicked(event: Event): void {
    this.eventDetails = this._eventDetailsMapper.mapToDetails(event);
    this.isShowingDetails = true;
  }

  public onCloseDetailsClicked(): void {
    this.isShowingDetails = false;
    this.eventDetails = null;
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.subscriptions = null;
  }
}
