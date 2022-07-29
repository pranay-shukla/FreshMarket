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
  searchVal = new BehaviorSubject(""); // for home-page filter
  typeSearch = new BehaviorSubject(""); // for product-type pages filter
 
  productsCart:product[] =[];
  countProd:number = 0 ;
  productInfo = new BehaviorSubject({});

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

  productDetail(product:any){
    this.productInfo.next(product);
  }
  
}
