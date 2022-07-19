import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductsDataService } from 'src/app/services/products-data.service';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,OnDestroy {
  
  typeSearch ="";
  
  // filter = {
  //     "type": ['dairy',"bakery"],
  //     "price":[18],
  //     "brand":['amul']
  //     }
  constructor(private _productDataService: ProductsDataService) {
    this._productDataService.searchVal.subscribe(res =>{
      this.typeSearch = res;
      // console.log(this.typeSearch)
    });
   }
   
  
  products = this._productDataService.products;
  
  filterSideBarValue: any ;
  
  ngOnInit(): void {
    
    this._productDataService.filterSideBarValue.subscribe(res =>{
      this.filterSideBarValue=res;     
      // console.log(this.filterSideBarValue)       
    });
    
  }
  ngOnDestroy(): void {

  }
}




