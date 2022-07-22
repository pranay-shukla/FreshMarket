import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFeaturedDirective } from './next-featured.directive';
import { NextNewDirective } from './next-new.directive';
import { PrevFeaturedDirective } from './prev-featured.directive';
import { PrevNewDirective } from './prev-new.directive';







@NgModule({
  declarations: [  
    NextFeaturedDirective,
    NextNewDirective,
    PrevFeaturedDirective,
    PrevNewDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NextFeaturedDirective,
    NextNewDirective,
    PrevFeaturedDirective,
    PrevNewDirective
  ]
})
export class AppDirectivesModule { }
