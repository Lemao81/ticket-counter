import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { ErrorMessage } from '@constants';
import { StatusCode } from '@enums';
import { environment } from '@environment';
import { IEventResponse, IEventsResponse, ILogger } from '@interfaces';
import { EventMapper } from '@mappers';
import { Event, GetEventRequest } from '@models';
import { LOGGER } from '@tokens';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  private _baseUrl = environment.apiBaseUrl + '/events';

  constructor(
    private _httpClient: HttpClient,
    private _eventMapper: EventMapper,
    @Inject(LOGGER) @Optional() private _logger: ILogger
  ) {}

  public getAll(): Observable<Event[]> {
    return this._httpClient.post<IEventsResponse>(`${this._baseUrl}/getEvents`, null).pipe(
      mergeMap((response: IEventsResponse) => {
        if (response.StatusCode !== StatusCode.Ok || !response.Result) {
          return throwError(new Error(ErrorMessage.STATUS_NOK_OR_NORESULT));
        } else {
          return of(response.Result.events.map(_ => this._eventMapper.mapToBo(_)));
        }
      }),
      catchError(this.handleError)
    );
  }

  public getById(id: number): Observable<Event> {
    const request: GetEventRequest = { eventId: id };

    return this._httpClient.post<IEventResponse>(`${this._baseUrl}/getEvent`, request).pipe(
      mergeMap((response: IEventResponse) => {
        if (response.statusCode !== StatusCode.Ok || !response.result) {
          return throwError(new Error(ErrorMessage.STATUS_NOK_OR_NORESULT));
        } else {
          return of(this._eventMapper.mapToBo(response.result.event));
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any, _: any): Observable<never> {
    console.error(error);

    return throwError(error);
  }
}
