import { Component, Input, OnInit } from '@angular/core';
import { StatusCode } from '@enums';
import { EventDetailsViewModel } from '@models';
import { EventApiService } from '@services';

@Component({
  selector: 'tc-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input()
  public events: EventDetailsViewModel[];

  constructor(private _eventApiService: EventApiService) {}

  ngOnInit() {}

  private fetchEvents(): void {
    this._eventApiService.getAll().subscribe(response => {
      if (!response.statusCode || response.statusCode === StatusCode.Error) {
      }
    });
  }
}
