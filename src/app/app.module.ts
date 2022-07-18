import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { FruitsComponent } from './fruits/fruits.component';
import { BakeryComponent } from './bakery/bakery.component';
import { VeganComponent } from './vegan/vegan.component';
import { MeatComponent } from './meat/meat.component';
import { DairyProductsComponent } from './dairy-products/dairy-products.component';
import { CartComponent } from './cart/cart.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ProductComponent } from './product/product.component';
import { ProductsDataService } from './services/products-data.service';

import { AppPipeModule } from './app-pipe/app-pipe.module';
import { ProductTypeComponent } from './product-type/product-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeggiesComponent,
    FruitsComponent,
    BakeryComponent,
    VeganComponent,
    MeatComponent,
    DairyProductsComponent,
    CartComponent,
    SitemapComponent,
    BookmarkComponent,
    ProductComponent,
    ProductTypeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UserModule,
    AppPipeModule
  ],
  exports:[
    
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent]
})

export class AppModule {
  // products = products;
 }
