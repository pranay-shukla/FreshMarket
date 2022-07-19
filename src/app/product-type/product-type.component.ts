import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsDataService } from '../services/products-data.service';


@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit,OnDestroy {
  subscribe = Subscription;
  typeSearch = "";
  constructor(private _ProductsDataService:ProductsDataService,) {
    // for product page search type 
    this._ProductsDataService.typeSearch.subscribe(res =>{
      this.typeSearch = res;
      // console.log(res);
    })
   }
  // products=this.searchPipe.transform(this._ProductsDataService.products,this.typeSearch);
  products = this._ProductsDataService.products; 
 
  filterSideBarValue:any;
  ngOnInit(): void {
    this._ProductsDataService.filterSideBarValue.subscribe(res =>{
      this.filterSideBarValue = res;
      })
    // console.log(this.filterSideBarValue);
    
  }
  ngOnDestroy(): void {
   
  }

  
}
