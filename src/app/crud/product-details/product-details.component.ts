import { Component, OnInit } from '@angular/core';
import {CRUDService} from "../services/crud.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private crudService: CRUDService) { }

  ngOnInit(): void {
  }

}
