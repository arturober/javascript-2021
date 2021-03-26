const SERVER = 'http://arturober.com:5005/';

let imagePreview = null;
let productForm = null;
let tableProducts = null;

function convertBase64(file) {
    let reader = new FileReader();

    if (file) { // File has been selected (convert to Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => { //Converted into Base64 event (async)
        imagePreview.src = reader.result;
    });
}

function mostrarProducto(producto) {
    let tr = document.createElement('tr');
    let tdImg = document.createElement('td');
    let img = document.createElement('img');
    img.src = SERVER + producto.photo;
    tdImg.append(img);
    let tdNombre = document.createElement('td');
    tdNombre.append(producto.name);
    let tdDesc = document.createElement('td');
    tdDesc.append(producto.description);

    let tdBorrar = document.createElement('td');
    let botonBorrar = document.createElement('button');
    botonBorrar.append('Borrar');
    tdBorrar.append(botonBorrar);

    botonBorrar.addEventListener('click', async e => {
        await deleteProducto(producto.id);
        tr.remove(); 
    });

    tr.append(tdImg, tdNombre, tdDesc, tdBorrar);
    tableProducts.querySelector('tbody').append(tr);
}

async function deleteProducto(id) {
    let resp = await fetch(`${SERVER}products/` + id, {
        method: 'DELETE'
    });

    if(!resp.ok) {
        throw new Error(resp.statusText);
    }
}

async function getProductos() {
    let resp = await fetch(SERVER + 'products');
    if(!resp.ok) {
        throw new Error(resp.status);
    }
    let json = await resp.json();
    json.products.forEach(p => mostrarProducto(p));
}

async function addProducto(e) {
    e.preventDefault();
    let prod = {
        name: productForm.name.value,
        description: productForm.description.value,
        photo: imagePreview.src
    };

    let resp = await fetch(`${SERVER}products`, {
        method: 'POST',
        body: JSON.stringify(prod),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await resp.json();
    mostrarProducto(json.product);
    productForm.reset();
    imagePreview.src = "";
}

document.addEventListener('DOMContentLoaded', e => {
    imagePreview = document.getElementById("imagePreview");
    productForm = document.getElementById("addProduct");
    tableProducts = document.getElementById("productos");

    getProductos();

    productForm.photo.addEventListener("change", e => {
        convertBase64(productForm.photo.files[0]);
    });

    productForm.addEventListener("submit", addProducto);
});