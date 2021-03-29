let productService = new ProductService();
let form;
let imgPreview;
let container;

function appendProduct(p) {
    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.innerText = p.name;

    let tdDesc = document.createElement('td');
    tdDesc.innerText = p.description;

    let tdPhoto = document.createElement('td');

    let img = document.createElement('img');
    img.src = `${SERVER}/${p.photo}`;
    tdPhoto.appendChild(img);

    let tdDelete = document.createElement('td');
    let buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';
    tdDelete.appendChild(buttonDelete);

    buttonDelete.addEventListener('click', async event => {
        await productService.delete(p.id);
        tr.remove();
    });

    tr.appendChild(tdPhoto);
    tr.appendChild(tdName);
    tr.appendChild(tdDesc);
    tr.appendChild(tdDelete);

    container.appendChild(tr);
}

async function getProducts() {
    let prods = await productService.getAll();
    prods.forEach(p => appendProduct(p));
}

async function addProduct(product) {
    let prodResp = await productService.post(product);
    appendProduct(prodResp);
    form.reset();
    imgPreview.src = '';
}

document.addEventListener('DOMContentLoaded', event => { // Esperamos a que haya cargado todo el DOM antes de empezar
    getProducts();

    form = document.getElementById('addProduct');
    imgPreview = document.getElementById('preview');
    container = document.getElementById('productContainer');

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
