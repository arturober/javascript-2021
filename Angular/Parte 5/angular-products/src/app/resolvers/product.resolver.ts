import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Producto> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Producto> {
    return this.productsService.getProducto(+route.params.id).pipe(
      catchError(e => {
        this.router.navigate(['/products']);
        return EMPTY;
      })
    );
  }
}
