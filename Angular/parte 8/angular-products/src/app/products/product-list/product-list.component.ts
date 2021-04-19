import { Component, OnInit, OnDestroy, OnChanges, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';
import { Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('animateList', [
      transition(':enter', [
        query('product-item', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(100, animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))),
        ])
      ])
    ]),
    trigger('animateSelect', [
      state('selected', style({ borderLeft: '40px lightgreen solid' })),
      transition('* => selected', animate('200ms linear')),
      transition('selected => *', animate('200ms linear'))
    ])
  ]
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

  toggleSelect(prod: Producto) {
    prod.state = prod.state === 'selected' ? '' : 'selected';
  }
}
