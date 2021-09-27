import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from 'src/app/components/checkout/checkout.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
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
    private cartService: CartService,
    private localstorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    if (this.items.length > 0) {
      this.localstorageService.set(CheckoutComponent.key, this.items);
    }
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
