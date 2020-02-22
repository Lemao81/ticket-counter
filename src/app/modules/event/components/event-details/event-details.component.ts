import { Component, Input, OnInit } from '@angular/core';
import { EventDetailsViewModel } from '@models';

@Component({
  selector: 'tc-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input()
  public eventDetails: EventDetailsViewModel;

  constructor() {}

  ngOnInit() {}
}
