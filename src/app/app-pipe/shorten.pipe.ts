import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, maxLetters: any): string {
    if(maxLetters < value.length)
    return value.substring(0,maxLetters) + "...";

    return value;
  }

}
