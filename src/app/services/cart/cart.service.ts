import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartProduct, Product } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: CartProduct[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product){
    let tmp: CartProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      total: product.total,
      amount: 1,
      price: product.price
    };
    let state = true
    this.items.forEach(element => {
      if (element.id === product.id && element.total > element.amount){
        element.amount++;
        state = false;
      }
    });
    if (state){
      this.items.push(tmp);
    }
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  removeItem(item: CartProduct , count: number){
    this.items.forEach((element, index) => {
      if (element.id === item.id){
        element.amount -= count;
      }
      if (element.amount <= 0){
        this.items.splice(index, 1);
      }
    });
  }
  addItem(item: CartProduct){
    this.items.forEach((element, index) => {
      if (element.id === item.id && element.amount < element.total){
        element.amount++
      }
    });
  }
  getPrice(){
    let tmp = 0;
    this.items.forEach(element => {
      tmp += element.price * element.amount
    });
    return tmp;
  }
}
