import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'create-product', component: ProductFormComponent},
  {path: 'update-product/:productId', component: ProductFormComponent},
  {path: 'view-product-details/:productId', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
