import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AgGridModule} from "ag-grid-angular";
import 'ag-grid-enterprise';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    AgGridModule.withComponents([ProductListComponent]),
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class CRUDModule { }
