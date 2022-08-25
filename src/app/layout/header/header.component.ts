import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import {CookieService} from 'ngx-cookie-service'
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  searchBarObj:any;
  
  
  
  
  cartItems = 0;


  constructor(private _productDataService:ProductsDataService, private htto : HttpClient, private router : Router,
    private cookie : CookieService) { }
  
  ngOnInit(): void {
    // this._productDataService.loggedIn();
  
  }
  
  search(data: NgForm){
    this.searchBarObj  = data.value;
    
    // console.log(this.searchBarObj.searchItem);
    
    this._productDataService.searchVal.next(this.searchBarObj.searchItem);
  }
  cart(){
   
    
    if(this._productDataService.countProd.length === 0)
    return "Cart Empty"
    else
    return this._productDataService.countProd.length + " "+"items"
    
  }


  // for logging out of the user account 
  onClickLogout(){
    if(confirm('Do you want to log out?'))
    {
      this.htto.get<any>("http://localhost:3000/users/logout")
    .subscribe(res=>{
      alert('Logout Successfull')
      localStorage.removeItem('jwt');
      
      this._productDataService.login=true;
      this._productDataService.productsCart = []
      this._productDataService.countProd = []
      this._productDataService.username="Guest";
      this.router.navigate(['login']);
    },err=>{
      console.log(err)
      alert(err.error.message)
    })
    }
  }
username(){
  return this._productDataService.username;
}
login(){
  return this._productDataService.login;
}

  ngOnDestroy(): void {
    this._productDataService.searchVal.next("");
  }
}


