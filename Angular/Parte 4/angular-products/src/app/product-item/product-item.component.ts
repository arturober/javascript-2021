import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() producto: Producto;
  @Input() showImage: true;
  @Output() deleted = new EventEmitter<void>();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  changeRating(rating) {
    const oldRating = this.producto.rating;
    this.producto.rating = rating;
    this.productsService.changeRating(this.producto.id, rating).subscribe({
      error: error => {
        this.producto.rating = oldRating;
        console.error(error);
      }
    });
  }

  deleteProducto() {
    this.productsService.deleteProducto(this.producto.id).subscribe(
      () => this.deleted.emit()
    );
  }
}
