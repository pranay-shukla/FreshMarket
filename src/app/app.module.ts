import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home/home.component';
import { VeggiesComponent } from './veggies/veggies/veggies.component';
import { FruitsComponent } from './fruits/fruits/fruits.component';
import { BakeryComponent } from './bakery/bakery/bakery.component';
import { VeganComponent } from './vegan/vegan/vegan.component';
import { MeatComponent } from './meat/meat/meat.component';
import { DairyProductsComponent } from './dairy_products/dairy-products/dairy-products.component';
import { CartComponent } from './cart/cart/cart.component';
import { SitemapComponent } from './sitemap/sitemap/sitemap.component';
import { BookmarkComponent } from './bookmark/bookmark/bookmark.component';
import { ProductComponent } from './product/product/product.component';
import { ProductsDataService } from './services/products-data.service';

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
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    UserModule
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent]
})

export class AppModule {
  // products = products;
 }
