import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HomeModule } from "./home/home.module";
import { DummyModule } from "./dummy/dummy.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,

    AppRoutingModule,
    
    HomeModule,
    DummyModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
