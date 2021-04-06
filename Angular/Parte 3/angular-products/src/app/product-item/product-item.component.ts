import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() producto: Producto;
  @Input() showImage: true;

  constructor() { }

  ngOnInit(): void {
  }

  changeRating(rating) {
    this.producto.rating = rating;
  }
}
