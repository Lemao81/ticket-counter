import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function log<T>(message: string): (source: Observable<T>) => Observable<T> {
  return tap(_ => {
    console.log(message);
  });
}
