import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _productDataService : ProductsDataService) { }
  productsCart = this._productDataService.productsCart;
  countValue = this._productDataService.countProd; 
  ngOnInit(): void {
  }

}
