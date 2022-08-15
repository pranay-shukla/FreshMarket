import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  constructor(private _productDataService:ProductsDataService) { }
  searchBarObj:any;
  
  search(data: NgForm){
    this.searchBarObj  = data.value;
    
    // console.log(this.searchBarObj.searchItem);
    this._productDataService.searchVal.next(this.searchBarObj.searchItem);
  }
  ngOnInit(): void {
    // this._productDataService.searchVal.next(this.searchBarObj);
  }
  ngOnDestroy(): void {
    this._productDataService.searchVal.next("");
  }
  cart(){
    let value = this._productDataService.countProd.length;
    if(value === 0)
    return "Cart Empty"
    else
    return value + " "+"items"
  }
}


