import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: String, maxLetters: any): String {
    if(maxLetters < value.length)
    return value.substring(0,maxLetters) + "...";

    return value;
  }

}
