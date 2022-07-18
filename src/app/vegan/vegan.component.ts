import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-vegan',
  templateUrl: './vegan.component.html',
  styleUrls: ['./vegan.component.css']
})
export class VeganComponent implements OnInit,OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  
  

  ngOnInit(): void {
    this._productDataService.typeSearch.next("vegan");
  }
  ngOnDestroy(): void {
    this._productDataService.typeSearch.next(""); 
  }


}
