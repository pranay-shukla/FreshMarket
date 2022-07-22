import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextFeatured]'
})
export class NextFeaturedDirective {

  constructor(private el:ElementRef) { }
  
  @HostListener('click')
   nextFunc(){
    var element = this.el.nativeElement.parentElement.parentElement.children[1];
    var item = element.getElementsByClassName("product");
    for(let i = 0;i<5;i++)
    {
      element.append(item[0]);
    }
  }

}
