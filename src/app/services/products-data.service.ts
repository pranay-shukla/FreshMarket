import { Injectable } from '@angular/core';
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

  constructor() { }
  products:product[]=productData;
}
