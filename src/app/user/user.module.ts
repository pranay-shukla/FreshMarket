import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    LoginComponent,
    ContactComponent,
    AccountComponent
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
  ]
})
export class UserModule { }
