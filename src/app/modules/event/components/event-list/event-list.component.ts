import { Component, OnInit } from '@angular/core';
import { ToastMessage } from '@constants';
import { Event } from '@models';
import { filterPreviewPeriod, filterRequiredProperties, logItem, sortByDate } from '@rxoperators';
import { EventApiService, ToastService } from '@services';
import * as moment from 'moment';

import { nameof } from '../../../../../../node_modules/ts-simple-nameof/src/nameof';

@Component({
  selector: 'tc-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public events: Event[];

  constructor(private _eventApiService: EventApiService, private _toastService: ToastService) {}

  public ngOnInit(): void {
    this.fetchEvents();
  }

  private fetchEvents(): void {
    this._eventApiService
      .getAll()
      .pipe(
        logItem('begin'),
        filterRequiredProperties(nameof<Event>(_ => _.date)),
        logItem('afterPropertyFilter'),
        filterPreviewPeriod(moment.duration(3, 'months')),
        logItem('afterPreviewFilter'),
        sortByDate(),
        logItem('afterSorting')
      )
      .subscribe(
        events => {
          this.events = events;
          if (!this.events.length) {
            this._toastService.toastInfo(ToastMessage.LOAD_EVENTS_NORESULT);
          }
        },
        _ => this._toastService.toastError(ToastMessage.LOAD_EVENTS_FAIL)
      );
  }
}
