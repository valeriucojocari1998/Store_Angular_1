import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    BottomBarComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  exports: [
    TopBarComponent,
    ProductAlertsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    BottomBarComponent
  ]
})
export class SharedModule { }
