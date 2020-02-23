import { Injectable } from '@angular/core';
import { Event } from '@models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventCommunicationService {
  private eventItemClicked = new Subject<Event>();

  public eventItemClicked$ = this.eventItemClicked.asObservable();

  public emitEventItemClicked(event: Event): void {
    this.eventItemClicked.next(event);
  }
}
