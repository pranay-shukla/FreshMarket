import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsDataService } from '../services/products-data.service';


@Component({
  selector: 'app-veggies',
  templateUrl: './veggies.component.html',
  styleUrls: ['./veggies.component.css']
})
export class VeggiesComponent implements OnInit,OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  
  

  ngOnInit(): void {
    this._productDataService.typeSearch.next("vegetable");
  }
  ngOnDestroy(): void {
    this._productDataService.typeSearch.next(""); 
  }

}
