import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BakeryComponent } from './bakery/bakery.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CartComponent } from './cart/cart.component';
import { DairyProductsComponent } from './dairy-products/dairy-products.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { MeatComponent } from './meat/meat.component';
import { ProductComponent } from './product/product.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { AccountComponent } from './user/account/account.component';
import { ContactComponent } from './user/contact/contact.component';
import { LoginComponent } from './user/login/login.component';
import { VeganComponent } from './vegan/vegan.component';
import { VeggiesComponent } from './veggies/veggies.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  { path:'home', children : [
    {path:'',component: HomeComponent},
    {path:'product',component: ProductComponent}
  ]},
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
    path:'bakery', children:[
      {path:"",component:BakeryComponent},
      {path:"product",component:ProductComponent}
      
    ]    
  },
  {
    path: 'bookmark',
      component:BookmarkComponent,
      canActivate:[AuthGuard]
      
    
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'dairy-products', children:[
      {path:"",component:DairyProductsComponent},
      {path:"product",component:ProductComponent}
    ]
  },
  {
    path: 'fruits', children:[
      {path:"",component:FruitsComponent},
      {path:"product",component:ProductComponent}
    ]
  },
  {
    path: 'meat', children:[
      {path:"",component:MeatComponent},
      {path:"product",component:ProductComponent}
    ]
  },
  {
    path: 'sitemap',
    component: SitemapComponent
  },
  {
    path: 'vegan', children:[
      {path:"",component:VeganComponent},
      {path:"product",component:ProductComponent}
    ]
  },
  {
    path: 'veggies', children:[
      {path:"",component:VeggiesComponent},
      {path:"product",component:ProductComponent}
    ]
  },{
    path: 'register',
    component: RegisterComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
