import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartProduct } from 'src/assets/products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  tempCart: boolean = false;
  items: CartProduct[] = []
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  tempoCart(x: boolean){
    this.tempCart = x;
    this.items = this.cartService.getItems();
    console.log(this.items)
  }
  
}
