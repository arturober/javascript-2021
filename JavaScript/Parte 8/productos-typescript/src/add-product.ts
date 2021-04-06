import { Product } from './interfaces/product';
import { ProductService } from './product-service.class';

const productService = new ProductService();
let form: HTMLFormElement;
let imgPreview: HTMLImageElement;

async function addProduct(product: Product): Promise<void> {
    await productService.post(product);
    location.assign('index.html');
}

document.addEventListener('DOMContentLoaded', event => { // Esperamos a que haya cargado todo el DOM antes de empezar
    form = document.getElementById('addProduct') as HTMLFormElement;
    imgPreview = document.getElementById('preview') as HTMLImageElement;

    form.addEventListener('submit', event => { // Envío del formulario
        event.preventDefault();
        const product = {
            name: form.nombre.value,
            description: form.desc.value,
            photo: imgPreview.src
        };
        addProduct(product);
    });

    form.image.addEventListener('change', () => { // Imagen a Base64
        const file = form.image.files[0];
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.addEventListener('load', () => {
            imgPreview.src = reader.result as string;
        }, false);
    });

});
