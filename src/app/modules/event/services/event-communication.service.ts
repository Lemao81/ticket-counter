import { Injectable } from '@angular/core';
import { Event } from '@models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventCommunicationService {
  private eventItemClicked = new Subject<Event>();
  private closeDetailsClicked = new Subject<any>();

  public eventItemClicked$ = this.eventItemClicked.asObservable();
  public closeDetailsClicked$ = this.closeDetailsClicked.asObservable();

  public emitEventItemClicked(event: Event): void {
    this.eventItemClicked.next(event);
  }

  public emitCloseDetailsClicked(): void {
    this.closeDetailsClicked.next();
  }
}
