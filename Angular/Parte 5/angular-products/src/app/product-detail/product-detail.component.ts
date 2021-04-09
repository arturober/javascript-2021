import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Producto;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Products | Product detail');
    const id = +this.route.snapshot.params.id;
    this.productsService.getProducto(id).subscribe(
      product => this.product = product
    );
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  changeRating(rating) {
    const oldRating = this.product.rating;
    this.product.rating = rating;
    this.productsService.changeRating(this.product.id, rating).subscribe({
      error: error => {
        this.product.rating = oldRating;
        console.error(error);
      }
    });
  }
}
