import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent implements OnInit, OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  
  

  ngOnInit(): void {
    this._productDataService.typeSearch.next("bakery") ;
  }
  ngOnDestroy(): void {
    this._productDataService.typeSearch.next("") ;
  }
}
