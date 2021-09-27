import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { CartProduct } from 'src/assets/products';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  static key = "CART-LIST";
  moneyNeeded = 0;
  constructor(
    private cartService: CartService,
    private localstorageService: LocalStorageService
  ) { }
  items: CartProduct[] = [];
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.moneyNeeded = this.cartService.getPrice();
    if (this.items.length > 0) {
      this.localstorageService.set(CartComponent.key, this.items);
    } else {
      this.items = this.localstorageService.get(CartComponent.key)
      this.cartService.items = this.items;
    }
  }
  removeOne(item: CartProduct){
    this.cartService.removeItem(item, 1);
    this.moneyNeeded = this.cartService.getPrice();
    this.localstorageService.set(CartComponent.key, this.cartService.getItems())
  }
  removeAll(item: CartProduct){
    this.cartService.removeItem(item, item.amount);
    this.moneyNeeded = this.cartService.getPrice();
    this.localstorageService.set(CartComponent.key, this.cartService.getItems())
  }
  addItem(item: CartProduct){
    this.cartService.addItem(item);
    this.moneyNeeded = this.cartService.getPrice();
    this.localstorageService.set(CartComponent.key, this.cartService.getItems())
  }
  clearCart(){
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    this.moneyNeeded = this.cartService.getPrice();
    this.localstorageService.remove(CartComponent.key);
  }
  saveData(){
    this.localstorageService.set(CartComponent.key, this.items)
  }
}
