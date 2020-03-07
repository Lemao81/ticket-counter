import { IDateable } from '@interfaces';
import { Observable } from 'rxjs';

import { SortOrder } from '../enums';

export function sortByDate<T extends IDateable>(
  sortOder: SortOrder = SortOrder.DESC
): (source: Observable<T[]>) => Observable<T[]> {
  return (source: Observable<T[]>) =>
    new Observable(subscriber => {
      source.subscribe(
        dateables => subscriber.next(dateables.sort(sortOder === SortOrder.ASC ? sortAscending : sortDescending)),
        subscriber.error,
        subscriber.complete
      );
    });
}

function sortAscending<T extends IDateable>(first: T, second: T) {
  return first.date.getTime() - second.date.getTime();
}

function sortDescending<T extends IDateable>(first: T, second: T) {
  return first.date.getTime() + second.date.getTime();
}
