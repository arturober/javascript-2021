import { SERVER } from './constants';
import { Http } from './http.class';
import { Product } from './interfaces/product';
import { ProductsReponse } from './interfaces/responses';

export class ProductService {
    private http: Http;

    constructor() {
        this.http = new Http();
    }

    // Devuelve una promesa con los productos devueltos por el servidor transformados
    // a objetos de la clase Product.
    async getAll(): Promise<Product[]> {
        const resp = await this.http.get<ProductsReponse>(`${SERVER}/products`);
        return resp.products;
    }

    // Inserta el producto y devuelve una promesa con el producto insertado (objeto Product)
    async post(product) {
        const resp = await this.http.post(`${SERVER}/products`, product);
        return resp.product;
    }

    // Devuelve la promesa del método Http.ajax con su correspondiente llamada al servidor
    async delete(idProduct): Promise<void> {
        await this.http.delete<void>(`${SERVER}/products/${idProduct}`);
    }
}
