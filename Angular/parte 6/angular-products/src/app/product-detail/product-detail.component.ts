import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';
import { switchMap } from 'rxjs/operators';
import { ComponentDeactivate } from '../guards/leave-page.guard';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.producto = this.route.snapshot.data.producto;

    // Esto sería necesario si navegamos entre diferentes productos
    // sin salir de la página de detalle de producto
    // this.route.params.pipe(
    //   switchMap(params => {
    //     const id = +params.id;
    //     return this.productsService.getProducto(id);
    //   })
    // ).subscribe(producto => this.producto = producto);
  }

  goBack() {
    this.router.navigate(['/productos']);
  }

  edit() {
    this.router.navigate(['/productos/', this.producto.id, 'edit']);
  }

  changeRating(rating) {
    const oldRating = this.producto.rating;
    this.producto.rating = rating;
    this.productsService.changeRating(this.producto.id, rating).subscribe({
      error: error => this.producto.rating = oldRating
    });
  }
}
