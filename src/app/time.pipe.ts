import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60000) % 60;
    const seconds: number = Math.floor(value / 1000) % 60;
    const ms = value % 1000;
    return (
      ('00' + minutes).slice(-2) + ':' +
      ('00' + seconds).slice(-2) + ':' +
      ('00' + ms).slice(-2)

    );
  }

}
