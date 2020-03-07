import { Observable } from 'rxjs';

export function filterRequiredProperties<T>(...properties: string[]): (source: Observable<T[]>) => Observable<T[]> {
  return (source: Observable<T[]>) =>
    new Observable<T[]>(subscriber => {
      return source.subscribe(
        items =>
          subscriber.next(items.filter(item => properties.every(property => property in item && !!item[property]))),
        subscriber.error,
        subscriber.complete
      );
    });
}
