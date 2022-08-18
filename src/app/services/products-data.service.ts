import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import productData from '../../assets/products.json'

interface product{
  "title": String,
  "type": String,
  "description": String,
  "filename": String,
  "height": Number,
  "width": Number,
  "price": any,
  "rating": Number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  
  static products: any;
  products:product[]=productData;
  addToCart:any ={};
  searchVal = new BehaviorSubject(""); // for home-page filter
  typeSearch = new BehaviorSubject(""); // for product-type pages filter
  addedToCart = new BehaviorSubject(this.addToCart);// for showing added to cart or not wherever that item is shown
  
  productsCart:product[] =[];
  countProd:number[] = [] ;
  productInfo = new BehaviorSubject({});


  username = new BehaviorSubject(""); // to display the nae of user in the nav bar
  login = new BehaviorSubject(true);

  filterSideBarValue = new BehaviorSubject({
    "fruit" : true,
    "vegetable" : true,
    "bakery" : true,
    "vegan" : true,
    "meat" : true,
    "dairy" : true,
    "brand" : {
      "amul" : false,
      "goldy": false
    },
    'price':{
      "50" : false,
    "100" : false,
    "150" : false,
    "200" : false
    }
    
  }); // for side-bar filter
  
  constructor() { 
    
    
  }
  filteredValue(sidebarValue : any){
    this.filterSideBarValue.next(sidebarValue);
  }

  productDetail(product:any,index:number){
    this.productInfo.next(product);
  }
  
}
