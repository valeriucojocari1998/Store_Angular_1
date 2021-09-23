import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/assets/products';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  moneyNeeded = 0;
  constructor(
    private cartService: CartService
  ) { }
  items = this.cartService.getItems();
  ngOnInit(): void {
    this.moneyNeeded = this.cartService.getPrice();
  }
  removeOne(item: CartProduct){
    this.cartService.removeItem(item, 1);
    this.moneyNeeded = this.cartService.getPrice();
  }
  removeAll(item: CartProduct){
    this.cartService.removeItem(item, item.amount);
    this.moneyNeeded = this.cartService.getPrice();
  }
  addItem(item: CartProduct){
    this.cartService.addItem(item);
    this.moneyNeeded = this.cartService.getPrice();
  }
  clearCart(){
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    this.moneyNeeded = this.cartService.getPrice();
  }
}
