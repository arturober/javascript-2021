import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Mi lista de productos';
  headers = {
    image: 'Imagen',
    description: 'Producto',
    price: 'Precio',
    available: 'Disponible',
    rating: 'Puntuación'
  };
  showImage = true;
  filterSearch = '';

  productos: Producto[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  addProduct(producto: Producto): void {
    this.productos = [...this.productos, producto];
  }

  deleteProduct(producto: Producto): void {
    this.productos = this.productos.filter(p => p !== producto);
  }
}
