import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  searchBarObj:any;
  
  
  username : string ='';
  login = true;



  constructor(private _productDataService:ProductsDataService, private htto : HttpClient, private router : Router) { }
  
  ngOnInit(): void {
    this._productDataService.username.subscribe(res=>{
      this.username = res;
    })
    this._productDataService.login.subscribe(res=>{
      this.login = res;
    })
    // this._productDataService.searchVal.next(this.searchBarObj);
  }
  
  search(data: NgForm){
    this.searchBarObj  = data.value;
    
    // console.log(this.searchBarObj.searchItem);
    
    this._productDataService.searchVal.next(this.searchBarObj.searchItem);
  }
  cart(){
    let value = this._productDataService.countProd.length;
    if(value === 0)
    return "Cart Empty"
    else
    return value + " "+"items"
  }


  // for logging out of the user account 
  onClickLogout(){
    if(confirm('Do you want to log out?'))
    {
      this.htto.get<any>("http://localhost:3000/users/logout")
    .subscribe(res=>{
      alert('Logout Successfull')
      this._productDataService.login.next(!this._productDataService.login)
      this.router.navigate(['login']);
    },err=>{
      alert(err.error.message)
    })
    }
  }


  ngOnDestroy(): void {
    this._productDataService.searchVal.next("");
  }
}


