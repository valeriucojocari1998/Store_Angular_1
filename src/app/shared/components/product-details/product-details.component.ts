import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from 'src/assets/products';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    //to get the product id from route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //find our product
    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product){
    if ( product.total > 0 ) {
      this.cartService.addToCart(product);
      window.alert('Item added to cart');
    }
  }
}
