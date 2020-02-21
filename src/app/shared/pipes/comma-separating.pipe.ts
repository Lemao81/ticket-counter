import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparate'
})
export class CommaSeparatingPipe implements PipeTransform {
  public transform(value: any, args?: any): any {
    const strings = value as Array<string>;
    if (!strings) {
      return '';
    }

    return strings.join(', ');
  }
}
