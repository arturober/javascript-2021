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

    botonBorrar.addEventListener('click', e => {
        deleteProducto(producto.id).then(() => {
           tr.remove(); 
        });
    });

    tr.append(tdImg, tdNombre, tdDesc, tdBorrar);
    tableProducts.querySelector('tbody').append(tr);
}

function deleteProducto(id) {
    return fetch(`${SERVER}products/` + id, {
        method: 'DELETE'
    })
    .then(resp => {
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }
    });
}

function getProductos() {
    fetch(SERVER + 'products')
    .then(resp => {
        if(resp.ok) {
            return resp.json();
        } else {
            throw new Error(resp.status);
        }
    }).then(json => {
        json.products.forEach(p => mostrarProducto(p));
    }).catch(error => {
        console.error('Error: ' + error);
    });
}

function addProducto(e) {
    e.preventDefault();
    let prod = {
        name: productForm.name.value,
        description: productForm.description.value,
        photo: imagePreview.src
    };

    fetch(`${SERVER}products`, {
        method: 'POST',
        body: JSON.stringify(prod),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => mostrarProducto(json.product))
    .catch(e => console.error(e));        

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