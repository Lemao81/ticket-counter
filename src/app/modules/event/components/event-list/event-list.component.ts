import { Component, Input, OnInit } from '@angular/core';
import { ToastMessage } from '@constants';
import { Event } from '@models';
import { EventApiService, ToastService } from '@services';

@Component({
  selector: 'tc-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input()
  public events: Event[];

  constructor(private _eventApiService: EventApiService, private _toastService: ToastService) {}

  ngOnInit() {}

  private fetchEvents(): void {
    this._eventApiService.getAll().subscribe(
      events => {
        this.events = events.filter(_ => _.date);
        if (!this.events.length) {
          this._toastService.toastInfo(ToastMessage.LOAD_EVENTS_NORESULT);
        }
      },
      _ => this._toastService.toastError(ToastMessage.LOAD_EVENTS_FAIL)
    );
  }
}
