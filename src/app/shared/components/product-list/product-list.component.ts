import { Component, OnInit } from '@angular/core';
import { Product, products } from 'src/assets/products';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //attributes
  initialProducts = products;
  products : Product[] = [];
  scrollDistance = 1;
  scrollUpDistance = 2;
  throttle = 150;
  //constructor
  constructor(
    private cartService: CartService
  ) { }

  //methods
  ngOnInit(): void {
    this.initialProducts.forEach(element => {
      this.products.push(element);
    });
    console.log(this.products);
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes to sale');
  }
  onScrollDown(){
    this.initialProducts.forEach(element => {
      this.products.push(element);
    });
  }
  addToCart(item: Product){
    this.cartService.addToCart(item)
  }
}
