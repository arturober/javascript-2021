import { SERVER } from './constants';
import { ProductService } from './product-service.class';
import '../css/styles.css';
import productsTemplate from './templates/product.handlebars';

const productService = new ProductService();
let container;

function appendProduct(p): void {
    const tr = document.createElement('tr');

    const html = productsTemplate({...p, photo: SERVER + '/' + p.photo});
    tr.innerHTML = html;

    tr.querySelector('button').addEventListener('click', async event => {
        await productService.delete(p.id);
        tr.remove();
    });

    container.appendChild(tr);
}

async function getProducts() {
    const prods = await productService.getAll();
    prods.forEach(p => appendProduct(p));
}

document.addEventListener('DOMContentLoaded', event => { // Esperamos a que haya cargado todo el DOM antes de empezar
    container = document.getElementById('productContainer');
    getProducts();
});
