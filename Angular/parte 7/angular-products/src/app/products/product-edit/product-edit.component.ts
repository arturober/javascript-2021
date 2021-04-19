import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { ComponentDeactivate } from '../../guards/leave-page.guard';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, ComponentDeactivate {
  producto: Producto;
  fechaHoy = new Date().toISOString();

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.producto = this.route.snapshot.data.producto;
    this.producto.available = this.producto.available.substr(0, 16);
  }

  canDeactivate(): boolean {
    return confirm('¿Quieres abandonar la página?. Los cambios no se guardarán.');
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

  editProduct() {
    console.log('Editamos producto');
  }
}
