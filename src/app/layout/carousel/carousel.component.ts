import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';


import productData from '../../../assets/products.json' ;


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

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  

  constructor() { }
  products: product[] = productData;
  ngOnInit(): void {
  }
  
}


// export class CarouselComponent implements OnInit {
  

//   constructor() { }
  
//   ngOnInit(): void {
//   }
//   products = productData;
// }
