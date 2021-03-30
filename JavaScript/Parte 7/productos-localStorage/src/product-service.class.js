export class ProductService {
    // Devuelve una promesa con los productos devueltos por el servidor transformados
    // a objetos de la clase Product.
    async getAll() {
        return JSON.parse(localStorage.productos || '[]');
    }

    // Inserta el producto y devuelve una promesa con el producto insertado (objeto Product)
    async post(product) {
        const productos = JSON.parse(localStorage.productos || '[]');
        productos.push(product);
        localStorage.productos = JSON.stringify(productos);
        return product;
    }

    // Devuelve la promesa del método Http.ajax con su correspondiente llamada al servidor
    async delete(index) {
        const productos = JSON.parse(localStorage.productos || '[]');
        productos.splice(index, 1);
        localStorage.productos = JSON.stringify(productos);
    }
}
