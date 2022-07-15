import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from './bakery/bakery/bakery.component';
import { BookmarkComponent } from './bookmark/bookmark/bookmark.component';
import { CartComponent } from './cart/cart/cart.component';
import { DairyProductsComponent } from './dairy_products/dairy-products/dairy-products.component';
import { FruitsComponent } from './fruits/fruits/fruits.component';
import { HomeComponent } from './home/home/home.component';
import { MeatComponent } from './meat/meat/meat.component';
import { ProductComponent } from './product/product/product.component';
import { SitemapComponent } from './sitemap/sitemap/sitemap.component';
import { AccountComponent } from './user/account/account.component';
import { ContactComponent } from './user/contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { VeganComponent } from './vegan/vegan/vegan.component';
import { VeggiesComponent } from './veggies/veggies/veggies.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'bakery',
    component: BakeryComponent
  },
  {
    path: 'bookmark',
    component: BookmarkComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'dairy-products',
    component: DairyProductsComponent
  },
  {
    path: 'fruits',
    component: FruitsComponent
  },
  {
    path: 'meat',
    component: MeatComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'sitemap',
    component: SitemapComponent
  },
  {
    path: 'vegan',
    component: VeganComponent
  },
  {
    path: 'veggies',
    component: VeggiesComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
