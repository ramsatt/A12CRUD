import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [
    CreateProductComponent,
    ViewProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    AgGridModule.withComponents([ProductListComponent])
  ]
})
export class CRUDModule { }
