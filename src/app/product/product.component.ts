import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  product:any ;
  frequentlyBoughtProducts=this._productDataService.products;
  similarProducts=this._productDataService.products;
  ngOnInit(): void {
    this._productDataService.productInfo.subscribe(res =>{
      this.product = res;
    })
  }
  ngOnDestroy(): void {
    // this._productDataService.productInfo.next({});
  }
  Onclickproduct(product:any,index:number){
    this._productDataService.productDetail(product,index);
  }
  onClickCart(countValue:any,product :any){
    return this._productDataService.onClickAddCart(countValue,product);
  }
  onClickAddCart(countValue:number,product :any){
    return this._productDataService.onClickAddCart(countValue,product);
  }

}
