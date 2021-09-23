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
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  overCheckout(x: boolean){
    this.checkout = x;
    console.log(x)
  }
  overCart(x: boolean){
    this.cart = x;
    console.log(x);
  }
}
