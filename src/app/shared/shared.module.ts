import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { TopBarComponent } from '../top-bar/top-bar.component';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class SharedModule { }
