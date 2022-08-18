import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private _productDataService : ProductsDataService) { }

  

  ngOnInit(): void {
  }
  getData(data:NgForm){
    this.http.post<any>("http://localhost:3000/users/login",data)
    .subscribe(res=>{
      this._productDataService.username.next(res.username) 
      
      alert(res.message)
      this._productDataService.login.next(!this._productDataService.login)
      this.router.navigate(['home'])
    },err=>{      
      alert(err.error.message)
    })
  }

}
