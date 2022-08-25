import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

  constructor(private _productDataService : ProductsDataService, private http: HttpClient) { 
    this._productDataService.addProductToCart();
  }
  // productsCart = this._productDataService.productsCart;
  // countValue = this._productDataService.countProd;
   price = this.calculatedPrice();
   discount = this.calculateDiscount();
   deliveryCharges = this.CalculateDeliveryCharges();

  ngOnInit(): void {

    // this.productsCart = this._productDataService.productsCart;
    // this.countValue = this._productDataService.countProd;
  
    
 
    
  }
  onClickRemoveCart(product:any){
    const userToken =localStorage.getItem('jwt')
   
    
    this.http.post<any>('http://localhost:3000/cart/remove',{productId : product._id,userToken : userToken})
    .subscribe(res=>{
      
      this._productDataService.addProductToCart();
      alert(res.message)
    },err=>{
      alert(err.error)
    })
  
  }
  
  addCounter( i : number, product : any)
  {
    if(this._productDataService.countProd[i]<10)
    {
      this._productDataService.updateCount(this._productDataService.countProd[i]+1,product);
      // this._productDataService.countProd[i]++;

    }
    
    else{
      alert("Number Of each item can not be Greater than 10!!")
    }
  }
  subtractCounter( i : number, product : any)
  {
    if(this._productDataService.countProd[i]>1)
    {
      this._productDataService.updateCount(this._productDataService.countProd[i]-1,product);
      // this._productDataService.countProd[i]--;

    }
    else{
        alert("Number Of each item can not be Less than 1 in cart if you want to remove Please click on remove!!")
      }
  }
  calculatedPrice()
  {
    let price = 0
    for(let i = 0;i<this._productDataService.productsCart.length ;i++){
      price +=this._productDataService.productsCart[i].price * this._productDataService.countProd[i];
    }
    price = Number((price).toFixed(2));
    // this.priceCalculated = parseInt(this._productDataService.priceCalculated.next(price));
    return price;
  }
  calculateDiscount()
  {
    let value = 0;
    // this.discount = this._productDataService.discount.next(value);
    return value;
  }
  CalculateDeliveryCharges(){
    let value = 0;
    if(this.calculatedPrice() >= 500 || this._productDataService.productsCart.length === 0)
    value =  0;
    else 
    value = 40;
    // this.deliveryCharges = this._productDataService.deliveryCharges.next(value);
    
    return value;
  }
  totalPrice()
  {
    
    return (this.calculatedPrice()-this.calculateDiscount()+this.CalculateDeliveryCharges()).toFixed(2);
  }
  productsCart(){
    return this._productDataService.productsCart;
  }
  countValue(){
    return this._productDataService.countProd;
  }
 
}
