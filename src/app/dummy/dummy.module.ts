import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from "./dummy-routing.module";
import { DummyComponent } from './components/dummy.component';
import { DummyViewComponent } from './views/dummy.view.component';

@NgModule({
  declarations: [
    DummyComponent,
    DummyViewComponent,
  ],
  imports: [
    CommonModule,
    DummyRoutingModule,
  ]
})
export class DummyModule { }
