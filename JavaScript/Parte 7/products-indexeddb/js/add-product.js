import {Product} from './product.class';
import '../products.css';

let imagePreview = null;
let productForm = null;

function convertBase64(file) {
    let reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result;
    });
}

async function addProduct(e) {
    e.preventDefault();
    let prod = new Product({
        name: productForm.name.value,
        description: productForm.description.value,
        photo: imagePreview.src
    });

    try {
        await prod.post();
        location.assign('index.html');
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', e => {
    imagePreview = document.getElementById('imagePreview');
    productForm = document.getElementById('addProduct');

    productForm.photo.addEventListener('change', e => {
        convertBase64(productForm.photo.files[0]);
    });

    productForm.addEventListener('submit', addProduct);
});
