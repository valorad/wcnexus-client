import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";

import { HomeViewComponent } from './views/home.view.component';

@NgModule({
  declarations: [
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,    
  ]
})
export class HomeModule { }
