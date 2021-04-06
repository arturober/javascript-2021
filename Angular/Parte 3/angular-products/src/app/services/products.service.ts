import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductos(): Producto[] {
    return [{
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5,
    }, {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    }, {
      id: 3,
      description: '8x2GB DDR4 3200',
      available: '2018-12-15',
      price: 69.50,
      imageUrl: 'assets/ram.jpg',
      rating: 3
    }]
  }
}
