import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function logItem<T>(tag: string = ''): (source: Observable<T>) => Observable<T> {
  return tap(
    item => {
      if (tag) {
        console.log(tag + ':');
      }
      console.log(item);
    },
    error => {
      if (tag) {
        console.log(tag + ':');
      }
      console.error(error);
    },
    () => {
      const tagInsert = tag ? `'${tag}'` : '';
      console.log(`stream ${tagInsert} completed`);
    }
  );
}
