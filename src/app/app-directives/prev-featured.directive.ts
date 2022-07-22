import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevFeatured]'
})
export class PrevFeaturedDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click')
  prevFunc(){
    var element = this.el.nativeElement.parentElement.parentElement.children[1];
    var item = element.getElementsByClassName("product");
    for(let i = 0;i<5;i++)
    {
      element.prepend(item[item.length-1]);
    }
  }

}
