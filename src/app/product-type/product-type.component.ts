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
  
  products = this._ProductsDataService.products; 
 
  addedToCart:any = {}
  
  filterSideBarValue:any;
  ngOnInit(): void {
    this._ProductsDataService.filterSideBarValue.subscribe(res =>{
      this.filterSideBarValue = res;
      });
      this._ProductsDataService.addedToCart.subscribe(res =>{
        this.addedToCart = res;
      })
      // this._ProductsDataService.filteredProduct.subscribe(res =>{
      //   this.products = res;
      //   })
    // console.log(this.filterSideBarValue);
    
  }
  ngOnDestroy(): void {
    this._ProductsDataService.filterSideBarValue.next({
      "fruit" : true,
      "vegetable" : true,
      "bakery" : true,
      "vegan" : true,
      "meat" : true,
      "dairy" : true,
      "brand" : {
        "amul" : false,
        "goldy": false
      },
      'price':{
        "50" : false,
      "100" : false,
      "150" : false,
      "200" : false
      }
      
    } )
  }
  Onclickproduct(product:any,index:number){
    this._ProductsDataService.productDetail(product,index);
  }
  onClickAddCart(countValue:number,product :any,i:number){
    
    this._ProductsDataService.productsCart.push(product);
    
    this._ProductsDataService.countProd.push(countValue);
 
    this._ProductsDataService.addToCart[i] = !this._ProductsDataService.addToCart[i];
    this._ProductsDataService.addedToCart.next(this._ProductsDataService.addToCart);
    
    
  }
  onClickRemoveCart(product:any,i:any){
    let index = this._ProductsDataService.productsCart.findIndex(item => item.filename === product.filename);
    this._ProductsDataService.productsCart.splice(index,1);
    this._ProductsDataService.countProd.splice(index,1);
    this._ProductsDataService.addToCart[i] = !this._ProductsDataService.addToCart[i];
    this._ProductsDataService.addedToCart.next(this._ProductsDataService.addToCart);
    
  }
}
