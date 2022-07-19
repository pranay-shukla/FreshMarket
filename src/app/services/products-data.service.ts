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
  searchVal = new BehaviorSubject(""); // for home-page filt
  typeSearch = new BehaviorSubject(""); // for product-type pages filter

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
 
}
