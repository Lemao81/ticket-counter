import { Component, OnDestroy, NgZone } from '@angular/core';
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
  public detailsViewModel: EventDetailsViewModel;

  constructor(_eventCommunicationService: EventCommunicationService, private _eventDetailsMapper: EventDetailsMapper) {
    this.subscriptions.add(
      _eventCommunicationService.eventItemClicked$.subscribe(event => this.onEventItemClicked.bind(this)(event))
    );
  }

  public onEventItemClicked(event: Event) {
    this.detailsViewModel = this._eventDetailsMapper.mapToDetails(event);
    this.isShowingDetails = true;
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.subscriptions = null;
  }
}
