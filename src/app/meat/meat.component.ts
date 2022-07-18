import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit, OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  
  

  ngOnInit(): void {
    this._productDataService.typeSearch.next("meat")  ;
  }
  ngOnDestroy(): void {
    this._productDataService.typeSearch.next("")  ;
  }


}
