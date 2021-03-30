import {Product} from './product.class';
import '../products.css';

let tableProducts = null;

function appendProductHTML(prod) {
    let tr = prod.toHtml();
    tableProducts.querySelector('tbody').appendChild(tr);
}

async function getProducts() {
    try{
        let products = await Product.getAllProducts();
        products.forEach(p => appendProductHTML(p));
    } catch(e) {
        console.error('Error loading products: ' + e);
    }
}

document.addEventListener('DOMContentLoaded', e => {
    tableProducts = document.getElementById('products');

    getProducts();
});
