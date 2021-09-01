import { Component, OnInit } from '@angular/core';
import {CRUDService} from "../services/crud.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
declare const Swal: any;
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  // @ts-ignore
  productForm: FormGroup;
  productId: any;
  buttonText = 'Create Product';

  constructor(private crudService: CRUDService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createProductForm();
    let productId = '';
    if(this.activatedRoute.snapshot.params['productId']) {
      productId = this.activatedRoute.snapshot.params['productId'];
      if (productId !== '') {
        this.loadProductDetails(productId);
      }
    }

  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500)])],
      price: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8)])]
    });
  }

  createProduct(values: any) {
    let formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    if(this.productId) {
      // for update product details
      formData.append('id', this.productId);
      this.crudService.updateProductDetails(formData).subscribe(res => {
        if (res.result === 'success') {
          this.navigateTo('/crud/product-list');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Updated !',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
    } else {
      console.log('ee')
      this.crudService.createProduct(formData).subscribe(res => {
        if (res.result === 'success') {
          this.navigateTo('/crud/product-list');
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product created !',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
    }
  }

  loadProductDetails(productId: any) {
    this.buttonText = 'Update Product';
    this.crudService.loadProductInfo(productId).subscribe(res => {
      this.productForm.controls.name.setValue(res.p_name);
      this.productForm.controls.description.setValue(res.p_description);
      this.productForm.controls.price.setValue(res.p_price);
      this.productId = res.p_id;
    });
  }

  navigateTo(route: any) {
    this.router.navigate([route]);
  }

}
