import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFeaturedDirective } from './next-featured.directive';
import { NextNewDirective } from './next-new.directive';
import { PrevFeaturedDirective } from './prev-featured.directive';
import { PrevNewDirective } from './prev-new.directive';
import { CurrencyConverterDirective } from './currency-converter.directive';
import { NextProductDirective } from './next-product.directive';
import { PrevProductDirective } from './prev-product.directive';







@NgModule({
  declarations: [  
    NextFeaturedDirective,
    NextNewDirective,
    PrevFeaturedDirective,
    PrevNewDirective,
    CurrencyConverterDirective,
    NextProductDirective,
    PrevProductDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NextFeaturedDirective,
    NextNewDirective,
    PrevFeaturedDirective,
    PrevNewDirective,
    CurrencyConverterDirective,
    NextProductDirective,
    PrevProductDirective
  ]
})
export class AppDirectivesModule { }
