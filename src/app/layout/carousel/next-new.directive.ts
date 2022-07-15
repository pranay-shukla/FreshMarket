import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextNew]'
})
export class NextNewDirective {

  constructor(private el: ElementRef) {
   
    
   }
   @HostListener('click')
   nextFunc(){
    var element = this.el.nativeElement.parentElement.parentElement.children[3];
    var item = element.getElementsByClassName("product");
    for(let i = 0;i<5;i++)
    {
      element.append(item[0]);
    }
   }
}
