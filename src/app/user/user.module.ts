import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {CookieService} from 'ngx-cookie-service'


@NgModule({
  declarations: [
    LoginComponent,
    ContactComponent,
    AccountComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent,
    ContactComponent,
    AccountComponent
  ],
  providers:[
    CookieService
  ]
})
export class UserModule { }
