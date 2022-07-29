import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevProduct]'
})
export class PrevProductDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  prevFunc(){
    var element = this.el.nativeElement.parentElement.children[3];
    var item = element.getElementsByClassName("product");
    for(let i = 0;i<5;i++)
    {
      element.prepend(item[item.length-1]);
    }
  }

}
