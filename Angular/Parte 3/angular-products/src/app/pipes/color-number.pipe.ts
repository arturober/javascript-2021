import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorNumber'
})
export class ColorNumberPipe implements PipeTransform {

  transform(value: number): string {
    return value % 2 === 0 ? 'green' : 'red';
  }

}
