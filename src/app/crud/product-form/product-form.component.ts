import { Component, OnInit } from '@angular/core';
import {CRUDService} from "../services/crud.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private crudService: CRUDService) { }

  ngOnInit(): void {
  }

}
