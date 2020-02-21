import { Component, Input, OnInit } from '@angular/core';
import { EventDetailsViewModel } from '@models';

@Component({
  selector: 'tc-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {
  @Input()
  public event: EventDetailsViewModel;

  constructor() {}

  ngOnInit() {}
}
