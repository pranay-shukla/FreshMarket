import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  product:any = this._productDataService.products[0];
  ngOnInit(): void {
    // this._productDataService.productInfo.subscribe(res =>{
    //   this.product = res;
    // })
  }
  ngOnDestroy(): void {
    // this._productDataService.productInfo.next({});
  }

}
