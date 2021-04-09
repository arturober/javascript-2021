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
    // this.route.params.subscribe(
    //   (params) => {
    //     this.productsService.getProducto(params.id).subscribe(
    //       product => {
    //         this.product = product;
    //         this.title.setTitle('Angular Products | ' + product.description);
    //       },
    //       error => this.router.navigate(['/products'])
    //     );
    //   }
    // );

    this.route.data.subscribe(
      data => {
        this.product = data.product;
        this.title.setTitle('Angular Products | ' + this.product.description);
      }
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
