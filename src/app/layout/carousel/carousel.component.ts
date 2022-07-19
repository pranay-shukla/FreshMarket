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
  filterSideBarValue= {
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
    
  } ;
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
  
  
  
  ngOnInit(): void {
    this._productDataService.filterSideBarValue.subscribe(res =>{
      this.filterSideBarValue= res;     
      // console.log(this.filterSideBarValue)       
    });
    
  }
  ngOnDestroy(): void {
    this._productDataService.filterSideBarValue.next({
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
}




