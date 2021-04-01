import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Mi lista de productos';
  headers = { description: 'Producto', price: 'Precio', available: 'Disponible' };

  productos: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productos = [{
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    }, {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    }];
  }

}
