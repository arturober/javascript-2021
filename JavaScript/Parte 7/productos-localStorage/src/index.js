import { ProductService } from './product-service.class';
import '../css/styles.css';
import productsTemplate from './templates/product.handlebars';

let productService = new ProductService();
let container;

function appendProduct(p, i) {
    let tr = document.createElement('tr');

    let html = productsTemplate(p);
    tr.innerHTML = html;

    tr.querySelector('button').addEventListener('click', async event => {
        await productService.delete(i);
        tr.remove();
    });

    container.appendChild(tr);
}

async function getProducts() {
    let prods = await productService.getAll();
    prods.forEach((p, i) => appendProduct(p, i));
}

document.addEventListener('DOMContentLoaded', event => { // Esperamos a que haya cargado todo el DOM antes de empezar
    container = document.getElementById('productContainer');
    getProducts();
});
