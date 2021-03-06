import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() add = new EventEmitter<Producto>();

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
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
        this.add.emit(product);
        this.resetForm();
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
