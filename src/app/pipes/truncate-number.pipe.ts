import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateNumber',
  standalone: true
})
export class TruncateNumberPipe implements PipeTransform {

  transform(value: number): string {

    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return value.toString();


  }

}
