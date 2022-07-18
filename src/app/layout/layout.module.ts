import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

import { NextFeaturedDirective } from './carousel/next-featured.directive';
import { PrevFeaturedDirective } from './carousel/prev-featured.directive';
import { NextNewDirective } from './carousel/next-new.directive';
import { PrevNewDirective } from './carousel/prev-new.directive';
import { AppPipeModule } from '../app-pipe/app-pipe.module';





@NgModule({
  declarations: [
    HeaderComponent,
    HighlightsComponent,
    SidebarComponent,
    CarouselComponent,
    FooterComponent,
    
    NextFeaturedDirective,
    NextNewDirective,
    PrevFeaturedDirective,
    PrevNewDirective,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AppPipeModule
    
  ],
  exports: [
    HeaderComponent,
    HighlightsComponent,
    SidebarComponent,
    CarouselComponent,
    FooterComponent
  ]
})
export class LayoutModule { 
  
}
