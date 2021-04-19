import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Mi lista de productos';
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

  constructor(private productsService: ProductsService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Product list | Angular Products');

    this.productsService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
