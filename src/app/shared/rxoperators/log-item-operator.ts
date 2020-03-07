import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function logItem<T>(tag: string = ''): (source: Observable<T>) => Observable<T> {
  return tap(
    item => {
      logTag();
      console.log(item);
    },
    error => {
      logTag();
      console.error(error);
    },
    () => {
      const tagInsert = tag ? `'${tag}'` : '';
      console.log(`stream ${tagInsert} completed`);
    }
  );

  function logTag() {
    if (tag) {
      console.log(tag + ':');
    }
  }
}
