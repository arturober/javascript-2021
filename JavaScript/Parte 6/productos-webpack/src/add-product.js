import { ProductService } from './product-service.class';

let productService = new ProductService();
let form;
let imgPreview;

async function addProduct(product) {
    await productService.post(product);
    location.assign('index.html');
}
document.addEventListener('DOMContentLoaded', event => { // Esperamos a que haya cargado todo el DOM antes de empezar
    form = document.getElementById('addProduct');
    imgPreview = document.getElementById('preview');

    form.addEventListener('submit', event => { // Envío del formulario
        event.preventDefault();
        let product = {
            name: form.name.value,
            description: form.desc.value,
            photo: document.getElementById('preview').src
        };
        addProduct(product);
    });

    form.image.addEventListener('change', () => { // Imagen a Base64
        var file = form.image.files[0];
        var reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.addEventListener('load', () => {
            imgPreview.src = reader.result;
        }, false);
    });

});
