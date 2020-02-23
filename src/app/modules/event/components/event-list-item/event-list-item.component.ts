import { Component, Input, OnInit } from '@angular/core';
import { Event } from '@models';

import { EventCommunicationService } from '../../services/event-communication.service';

@Component({
  selector: 'tc-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {
  @Input()
  public event: Event;

  constructor(private _eventCommunicationService: EventCommunicationService) {}

  ngOnInit() {}

  public onEventItemClicked(event: Event) {
    this._eventCommunicationService.emitEventItemClicked(event);
  }
}
