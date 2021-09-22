import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
