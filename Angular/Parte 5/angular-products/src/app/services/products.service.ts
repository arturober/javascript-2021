import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, retry } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';
import { ProductsResponse, ProductResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL = 'products';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<ProductsResponse>(this.URL).pipe(
      map(resp => resp.products),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error getting products. Status: ${error.status}. Message: ${error.message}`);
      })
    );
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<ProductResponse>(`${this.URL}/${id}`).pipe(
      map(resp => resp.product),
    );
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<ProductResponse>(this.URL, producto).pipe(
      map(resp => resp.product)
    );
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }

  changeRating(idProd: number, rating: number): Observable<void> {
    return this.http.put<void>(`${this.URL}/${idProd}/rating`, {rating});
  }
}
