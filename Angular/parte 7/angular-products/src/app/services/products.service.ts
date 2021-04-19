import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, delay } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Producto } from '../products/interfaces/producto';
import { ProductsResponse, ProductResponse, ChangeRatingResponse } from '../products/interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productsURL = '/products';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<ProductsResponse>(this.productsURL).pipe(
      map(resp => resp.products)
    );
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<ProductResponse>(`${this.productsURL}/${id}`).pipe(
      // delay(2000),
      map(resp => resp.product)
    );
  }

  changeRating(productId, rating): Observable<number> {
    return this.http.put<ChangeRatingResponse>(`${this.productsURL}/${productId}/rating`, {rating})
      .pipe(
        // delay(2000), -> Retraso 2 segundos la respuesta (simula lentitud)
        map(resp => resp.rating)
      );
  }
}
