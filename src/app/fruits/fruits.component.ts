import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit,OnDestroy {
  
  constructor(private _productDataService:ProductsDataService) { }
  
  

  ngOnInit(): void {
    this._productDataService.typeSearch.next("fruit") ;
  }
  ngOnDestroy(): void {
    this._productDataService.typeSearch.next("") ; 
  }


}
