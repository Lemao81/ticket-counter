import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { IEventResponse, IEventsResponse } from '@interfaces';
import { EventMapper } from '@mappers';
import { Event, GetEventRequest } from '@models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  private _baseUrl = environment.apiBaseUrl + '/events';

  constructor(private _httpClient: HttpClient, private _eventMapper: EventMapper) {}

  public getAll(): Observable<IEventsResponse> {
    return this._httpClient.post<IEventsResponse>(`${this._baseUrl}/getEvents`, null);
  }

  public getById(id: number): Observable<Event> {
    const request: GetEventRequest = { eventId: id };

    return this._httpClient.post<IEventResponse>(`${this._baseUrl}/getEvent`, request).pipe(
      map((response: IEventResponse) => {
        return response.result ? this._eventMapper.mapToBo(response.result.event) : null;
      })
    );
  }
}
