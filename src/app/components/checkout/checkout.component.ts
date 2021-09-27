import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { CartProduct } from 'src/assets/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  static key="CART-LIST"
  items: CartProduct[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private localstorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    if (this.items.length > 0) {
      this.localstorageService.set(CheckoutComponent.key, this.items);
    } else {
      this.items = this.localstorageService.get(CheckoutComponent.key)
      this.cartService.items = this.items;
    }
    this.totalPrice = this.cartService.getPrice();
  }

}
