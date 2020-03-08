import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastMessage } from '@constants';
import { Event } from '@models';
import { filterPreviewPeriod, filterRequiredProperties, log, polling, sortByDate } from '@rxoperators';
import { EventApiService, ToastService } from '@services';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { nameof } from '../../../../../../node_modules/ts-simple-nameof/src/nameof';

@Component({
  selector: 'tc-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  public events: Event[];

  constructor(private _eventApiService: EventApiService, private _toastService: ToastService) {}

  public ngOnInit(): void {
    this.subscription.add(
      polling(this._eventApiService.getAll(), 10000)
        .pipe(
          filterRequiredProperties(nameof<Event>(_ => _.date)),
          filterPreviewPeriod(moment.duration(3, 'months')),
          sortByDate(),
          log('events polled')
        )
        .subscribe(
          events => {
            this.events = events;
            if (!this.events.length) {
              this._toastService.toastInfo(ToastMessage.LOAD_EVENTS_NORESULT);
            }
          },
          _ => this._toastService.toastError(ToastMessage.LOAD_EVENTS_FAIL)
        )
    );
  }

  public trackEvent(_: number, event: Event): any {
    return event ? event.id : undefined;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
