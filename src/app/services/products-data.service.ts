import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';


// import productData from '../../assets/products.json'

interface product{
  "id" : String,
  "title": String,
  "type": String,
  "description": String,
  "filename": String,
  "height": Number,
  "width": Number,
  "price": any,
  "rating": Number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  
  static products: any;

  //for showing carousel products
  products:product[]=[];
  

//for updating cart
  productsCart:any=[];
  


  searchVal = new BehaviorSubject(""); // for home-page filter
  typeSearch = new BehaviorSubject(""); // for product-type pages filter
  
  
  // for storing count of each item in cart
  countProd :number[]=[];
  productInfo = new BehaviorSubject({});
  

  username :any // to display the nae of user in the nav bar
  //for finding whether user logged in or not
  login:any;

  filterSideBarValue = new BehaviorSubject({
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
    
  }); // for side-bar filter
  
  constructor(private http : HttpClient,private _auth : AuthService,private router:Router) { 

    this.http.get('http://localhost:3000/products')
    .subscribe((res : any )=>{
      
      
      this.products = res.productsData
      
    },err=>{
      alert(err.error.message)
    })
    
    this.loggedIn();
    }
    
  filteredValue(sidebarValue : any){
    this.filterSideBarValue.next(sidebarValue);
  }



  addProductToCart(){
    const userToken =localStorage.getItem('jwt')
    
    this.http.post('http://localhost:3000/cart/getAllCartProducts',{userToken : userToken})
    .subscribe((res:any)=>{
      
      
      this.countProd = res.countProduct;
      
      this.productsCart = res.productCart;
      
     
    },err=>{
      alert(err.error)
    })
  }

  onClickAddCart(countValue:number,product :any){
    if(!this._auth.loggedIn())
      {
        this.router.navigate(['login']);
        return; 
      }

    const userToken =localStorage.getItem('jwt')
    
    this.http.post<any>('http://localhost:3000/cart/add',{productId : product._id,userToken : userToken,countVal : countValue})
    .subscribe(res=>{
      alert(res.message)
      this.addProductToCart();
    },err=>{
      console.log(err)
    })
    
  }

  updateCount(countValue : number, product : any){
    const userToken =localStorage.getItem('jwt')
    this.http.post<any>('http://localhost:3000/cart/updateCount',{productId : product._id,userToken : userToken,countVal : countValue})
    .subscribe(res=>{
      this.addProductToCart();
      // alert(res.message)
    },err=>{
      console.log(err)
    })
  }


  productDetail(product:any,index:number){
    this.productInfo.next(product);
  }
  

// to stay logged in untill pressed logout
loggedIn(){
  const userToken =localStorage.getItem('jwt');
  
  if(userToken)
  {
    
    this.http.post<any>('http://localhost:3000/users/loggedIn',{userToken : userToken})
  .subscribe((res:any)=>{
    
    
    this.login = res.loggedIn;
    this.username = res.username;
    this.addProductToCart();
    
  },err=>{
    console.log(err)
  })
  }
  else{
    this.login = true;
    this.username = "Guest"
  }
}

}
