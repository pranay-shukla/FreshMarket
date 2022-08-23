import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  //for checking whether the token exists or not

  loggedIn(){
    return !!localStorage.getItem('jwt');
    
  }
  getToken(){
    return localStorage.getItem('jwt');
  }
}
