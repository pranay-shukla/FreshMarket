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
  filterSideBarValue = new BehaviorSubject<string[]> ([]); // for side-bar filter
  
  constructor() { 
    
    
  }
  addFilterSideBarValue(value:string){
    
    let tempArr = this.filterSideBarValue.value;
    tempArr.push(value);
    this.filterSideBarValue.next(tempArr)
    // console.log(this.filterSideBarValue.value);
    
  }
  removeFilterSideBarValue(value:any){
    let tempArr = this.filterSideBarValue.value;
    for(let i=0; i<tempArr.length;i++)
    {
      if(tempArr[i] === value)
      {
        tempArr.splice(i,1);
      }
    }
    this.filterSideBarValue.next(tempArr);
    // console.log(this.filterSideBarValue.value);
  }
  
}
