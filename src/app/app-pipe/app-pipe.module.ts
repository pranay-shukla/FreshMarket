import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarPipe } from './search-bar.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [
    SearchBarPipe,
    ProductFilterPipe,
    ShortenPipe
  ],
  imports: [
    CommonModule
    
  ],
  exports:[
    SearchBarPipe,
    ProductFilterPipe,
    ShortenPipe
  ]
})
export class AppPipeModule { }
