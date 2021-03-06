import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  newProduct!: Producto;
  imageFile = '';
  productAdded = false;
  fechaMin = '2021-01-01';
  @ViewChild('formProduct') formProduct: NgForm;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Products | Add product');
    this.resetForm();
  }

  loadImage(input: HTMLInputElement): void {
    if (!input.files) { return; }
    const file = input.files[0];
    const reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
      reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
      this.newProduct.imageUrl = reader.result as string;
    });
  }

  addProduct(): void {
    this.productsService.addProducto(this.newProduct).subscribe(
      product => {
        this.productAdded = true;
        this.router.navigate(['/products']);
      },
      error => console.error(error)
    );
  }

  resetForm(): void {
    this.newProduct = {
      description: '',
      available: '',
      imageUrl: '',
      price: 0,
      rating: 3
    };
    this.imageFile = '';
  }
}
