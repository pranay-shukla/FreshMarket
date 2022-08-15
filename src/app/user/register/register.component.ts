import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private createUserForm !: FormGroup;
  constructor(private formBuilder : FormBuilder,private http : HttpClient) { }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      username : String,
      email : String,
      password : String,
      phone : Number,
      userType : String
    })
  }

  getData(data:NgForm){
    

    this.http.post<any>("http://localhost:3000/users/signup",data)
    .subscribe(res =>{
      alert("User Created Successfully")
    })
    console.log(data)
  }
}
