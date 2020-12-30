import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: 'full'},
  { path: "index", loadChildren: () => import("./home/home.module").then(m => m.HomeModule)},
  { path: "dummy", loadChildren: () => import("./dummy/dummy.module").then(m => m.DummyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
