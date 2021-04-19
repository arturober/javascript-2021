export interface Producto {
  id?: number;
  description: string;
  price: number;
  available: string;
  imageUrl: string;
  rating: number;
  state?: string;
}
