import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartProduct } from 'src/assets/products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  checkout: boolean = false;
  cart: boolean = false;
  items: CartProduct[] = []
  totalPrice: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getPrice();
  }
  add(val: CartProduct){
    this.cartService.addItem(val);
    this.totalPrice = this.cartService.getPrice();

  }
  remove(val: CartProduct){
    this.cartService.removeItem(val, 1);
    this.totalPrice = this.cartService.getPrice();
  }
}
