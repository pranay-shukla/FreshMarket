import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ProductsDataService } from '../services/products-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

  constructor(private _productDataService : ProductsDataService) { }
  productsCart = this._productDataService.productsCart;
  countValue = this._productDataService.countProd; 
   price = this.calculatedPrice();
   discount = this.calculateDiscount();
   deliveryCharges = this.CalculateDeliveryCharges();

  ngOnInit(): void {
    // this._productDataService.priceCalculated.subscribe(res => 
    //   {this.priceCalculated = res})
    // this._productDataService.discount.subscribe(res => 
    //     {this.discount = res})
    // this._productDataService.deliveryCharges.subscribe(res => 
    //       {this.deliveryCharges = res})
    
  }
  onClickRemoveCart(product:any,i:any){
    let index = this._productDataService.productsCart.findIndex(item => item.filename === product.filename);
    this._productDataService.productsCart.splice(index,1);
    this._productDataService.countProd.splice(index,1);
    this._productDataService.addToCart[i] = !this._productDataService.addToCart[i];
    this._productDataService.addedToCart.next(this._productDataService.addToCart);
    
  }
  addCounter( i : number)
  {
    if(this.countValue[i]<10)
    this.countValue[i]++;
    else{
      alert("Number Of each item can not be Greater than 10!!")
    }
  }
  subtractCounter( i : number)
  {
    if(this.countValue[i]>1)
      this.countValue[i]--;
      else{
        alert("Number Of each item can not be Less than 1 in cart if you want to remove Please click on remove!!")
      }
  }
  calculatedPrice()
  {
    let price = 0
    for(let i = 0;i<this.productsCart.length ;i++){
      price +=this.productsCart[i].price * this.countValue[i];
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
    if(this.calculatedPrice() >= 500 || this.productsCart.length === 0)
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
 
}
