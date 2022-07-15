import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  

  constructor(private _productDataService: ProductsDataService) { }
  
  products = this._productDataService.products;

  ngOnInit(): void {
  }
  
}



function ngOnInit() {
  throw new Error('Function not implemented.');
}
// export class CarouselComponent implements OnInit {
  

//   constructor() { }
  
//   ngOnInit(): void {
//   }
//   products = productData;
// }
