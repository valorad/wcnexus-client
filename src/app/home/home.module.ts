import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";

import { HomeViewComponent } from './views/home.view.component';
import { SlideCoverComponent } from './components/slide-cover/slide-cover.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    SlideCoverComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,    
  ]
})
export class HomeModule { }
