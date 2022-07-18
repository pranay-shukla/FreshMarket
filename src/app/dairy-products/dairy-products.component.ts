import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-dairy-products',
  templateUrl: './dairy-products.component.html',
  styleUrls: ['./dairy-products.component.css']
})
export class DairyProductsComponent implements OnInit, OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  
  

  ngOnInit(): void {
    this._productDataService.typeSearch.next("dairy") ;
  }
  ngOnDestroy(): void {
  this._productDataService.typeSearch.next("") ;
  
  }

}
