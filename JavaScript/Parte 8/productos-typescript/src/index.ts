import { SERVER } from './constants';
import { ProductService } from './product-service.class';
import '../css/styles.css';
import { Product } from './interfaces/product';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const productsTemplate = require('./templates/product.handlebars');

const productService = new ProductService();
let container: HTMLElement;

function appendProduct(p: Product, i: number): void {
    const tr = document.createElement('tr');
    if(i % 2 === 0) {
        tr.classList.add('par');
    }

    const html = productsTemplate({...p, photo: SERVER + '/' + p.photo});
    tr.innerHTML = html;

    tr.querySelector('button').addEventListener('click', async event => {
        await productService.delete(p.id);
        tr.remove();
    });

    container.appendChild(tr);
}

async function getProducts(): Promise<void> {
    const prods = await productService.getAll();
    prods.forEach((p, i) => appendProduct(p, i));
}

document.addEventListener('DOMContentLoaded', event => { // Esperamos a que haya cargado todo el DOM antes de empezar
    container = document.getElementById('productContainer');
    getProducts();
});
