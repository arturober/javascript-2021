import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from '../products/interfaces/producto';
import { ProductsService } from '../products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolve implements Resolve<Producto> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Producto> {
    const id = +route.params.id;
    return this.productsService.getProducto(id);
  }
}
