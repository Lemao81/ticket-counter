import { IDateable } from '@interfaces';
import * as moment from 'moment';
import { Observable } from 'rxjs';

export function filterPreviewPeriod<T extends IDateable>(
  previewPeriod: moment.Duration
): (source: Observable<T[]>) => Observable<T[]> {
  return (source: Observable<T[]>) =>
    new Observable<T[]>(subscriber => {
      return source.subscribe(
        dateables => subscriber.next(dateables.filter(_ => filterPreview(_))),
        subscriber.error,
        subscriber.complete
      );
    });

  function filterPreview(dateable: IDateable): boolean {
    const now = moment();
    const nowPlusPreviewPeriod = moment();
    nowPlusPreviewPeriod.add(previewPeriod);

    return now.isBefore(dateable.date) && nowPlusPreviewPeriod.isAfter(dateable.date);
  }
}
