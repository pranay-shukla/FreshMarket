
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsDataService } from 'src/app/services/products-data.service';
import{CookieService} from 'ngx-cookie-service'



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,OnDestroy {
  
  typeSearch =""; 
  addedToCart:any = {}
  filterSideBarValue= {}
  constructor(private _productDataService: ProductsDataService, private http : HttpClient,
    private cookie : CookieService
    ) {
    
    
    
   }
   
  products = this._productDataService.products;
   
  
  
  
  ngOnInit(): void {
    this._productDataService.searchVal.subscribe(res =>{
      this.typeSearch = res;
      // console.log(this.typeSearch)
    });
    this._productDataService.filterSideBarValue.subscribe(res =>{
      this.filterSideBarValue= res;     
      // console.log(this.filterSideBarValue)       
    });
    this._productDataService.addedToCart.subscribe(res =>{
      this.addedToCart = res;
    })
    
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
  
  onClickAddCart(countValue:number,product :any,i:number){

    const userToken =localStorage.getItem('jwt')
    // const userToken = this.cookie.get('jwt')
    // console.log(product._id)
    this.http.post<any>('http://localhost:3000/cart/add',{productId : product._id,userToken : userToken})
    .subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
    
    this._productDataService.productsCart.push(product);
    
    this._productDataService.countProd.push(countValue);
 
    this._productDataService.addToCart[i] = !this._productDataService.addToCart[i];
    this._productDataService.addedToCart.next(this._productDataService.addToCart);
    
    
  }
  onClickRemoveCart(product:any,i:any){
    let index = this._productDataService.productsCart.findIndex(item => item.filename === product.filename);
    this._productDataService.productsCart.splice(index,1);
    this._productDataService.countProd.splice(index,1);
    this._productDataService.addToCart[i] = !this._productDataService.addToCart[i];
    this._productDataService.addedToCart.next(this._productDataService.addToCart);
    
  }
  
}




