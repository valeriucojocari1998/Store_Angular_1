import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TopBarComponent } from '../top-bar/top-bar.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { ShippingComponent } from '../shipping/shipping.component';



@NgModule({
  declarations: [
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    TopBarComponent,
    ProductAlertsComponent,
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class SharedModule { }
