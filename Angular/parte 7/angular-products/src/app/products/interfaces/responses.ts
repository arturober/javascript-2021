import { Producto } from './producto';

export interface ProductsResponse {
  products: Producto[];
}

export interface ProductResponse {
  product: Producto;
}

export interface ChangeRatingResponse {
  rating: number;
}
