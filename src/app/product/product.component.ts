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
  Onclickproduct(product:any){
    this._productDataService.productDetail(product);
  }
  onClickCart(countValue:any,product :any){
    this._productDataService.productsCart.push(product);
    this._productDataService.countProd += Number(countValue);
  }

}
