import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusCode } from '@enums';
import { environment } from '@environment';
import { IEventResponse, IEventsResponse } from '@interfaces';
import { EventMapper } from '@mappers';
import { Event, GetEventRequest } from '@models';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  private _baseUrl = environment.apiBaseUrl + '/events';

  constructor(private _httpClient: HttpClient, private _eventMapper: EventMapper) {}

  public getAll(): Observable<Event[]> {
    return this._httpClient.post<IEventsResponse>(`${this._baseUrl}/getEvents`, null).pipe(
      mergeMap((response: IEventsResponse) => {
        if (response.statusCode !== StatusCode.Ok || !response.result) {
          return throwError(new Error());
        } else {
          return of(response.result.events.map(_ => this._eventMapper.mapToBo(_)));
        }
      })
    );
  }

  public getById(id: number): Observable<Event> {
    const request: GetEventRequest = { eventId: id };

    return this._httpClient.post<IEventResponse>(`${this._baseUrl}/getEvent`, request).pipe(
      mergeMap((response: IEventResponse) => {
        if (response.statusCode !== StatusCode.Ok || !response.result) {
          return throwError(new Error());
        } else {
          return of(this._eventMapper.mapToBo(response.result.event));
        }
      })
    );
  }
}
