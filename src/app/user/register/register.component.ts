import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // private createUserForm !: FormGroup;
  constructor(private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }

  getData(data:NgForm){
    this.http.post<any>("http://localhost:3000/users/signup",data)
    .subscribe(res =>{
      alert("User Created Successfully");
      this.router.navigate(['login'])
    },err=>{
      const error = [Object.entries(err.error.message.keyValue)]
     
      const key = error[0][0][0];
      const value = error[0][0][1];
      if(key ==='email')
      alert(` The entered ${key} : ${value} is already registered. \n Please Login..`)
      else
      alert(` The entered Mobile number: ${value} is already assosciated with another user. \n Please try with another Mobile Number..`)
    })
    
  }
}
