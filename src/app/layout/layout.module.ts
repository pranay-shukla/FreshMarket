import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';


import { AppPipeModule } from '../app-pipe/app-pipe.module';
import { AppDirectivesModule } from '../app-directives/app-directives.module';
import{CookieService}from 'ngx-cookie-service'





@NgModule({
  declarations: [
    HeaderComponent,
    HighlightsComponent,
    SidebarComponent,
    CarouselComponent,
    FooterComponent,
    
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AppPipeModule,
    AppDirectivesModule
    
  ],
  exports: [
    HeaderComponent,
    HighlightsComponent,
    SidebarComponent,
    CarouselComponent,
    FooterComponent
  ],
  providers:[
    CookieService
  ]
})
export class LayoutModule { 
  
}
