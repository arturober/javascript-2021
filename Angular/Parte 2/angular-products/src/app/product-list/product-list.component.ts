import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Mi lista de productos';
  headers = { image: 'Imagen', description: 'Producto', price: 'Precio', available: 'Disponible' };
  showImage = true;
  filterSearch = '';

  productos: Producto[] = [];
  productosFiltrados: Producto[];

  constructor() { }

  ngOnInit(): void {
    this.productos = [{
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
    }];

    this.productosFiltrados = this.productos;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(
      p => p.description.toLowerCase().includes(this.filterSearch.toLowerCase())
    );
  }
}
