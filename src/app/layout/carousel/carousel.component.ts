
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsDataService } from 'src/app/services/products-data.service';
import{CookieService} from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,OnDestroy {
  
  typeSearch =""; 
  
  filterSideBarValue= {}
  constructor(private _productDataService: ProductsDataService, private http : HttpClient,
    private cookie : CookieService,private _auth : AuthService
    ) {
    
      if(this._auth.loggedIn())
      {
        
        this._productDataService.addProductToCart();
        
        
      }
    
   }
   
  products(){
    return this._productDataService.products;
  }
   
  
  
  
  ngOnInit(): void {
    this._productDataService.searchVal.subscribe(res =>{
      this.typeSearch = res;
      // console.log(this.typeSearch)
    });
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

  
  Onclickproduct(product:any,index:number){
    this._productDataService.productDetail(product,index);
  }
  
  onClickAddCart(countValue:number,product :any){
    // this._productDataService.addProductToCart();
    return this._productDataService.onClickAddCart(countValue,product);
  }

  
}




