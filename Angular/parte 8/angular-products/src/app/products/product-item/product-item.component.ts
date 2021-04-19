import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  changeRating(rating) {
    const oldRating = this.producto.rating;
    this.producto.rating = rating;
    this.productsService.changeRating(this.producto.id, rating).subscribe({
      error: error => this.producto.rating = oldRating
    });
  }
}
