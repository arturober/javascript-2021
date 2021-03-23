'use strict';

let form;
let imgPreview;

function sendForm(e) {
    e.preventDefault();
    console.log(`Text: ${form.text.value}`);
    console.log(`Option selected: ${form.select.value}`);
    console.log(form.hobbies);
    console.log(
        Array.from(form.hobbies)
            .filter(i => i.checked)
            .map(i => i.value)
            .join(", ")
    );
    console.log(`Food: ${form.food.value}`);
    let file = form.image.files[0];
    if (file) {
        console.log(`Archivo: ${file.name}, tipo: ${file.type}, tamaño: ${file.size} bytes`);
    }
    console.log(imgPreview.src);
}

function loadImage(e) {
    let file = form.image.files[0];
    if (file.type.startsWith('image')) {
        let reader = new FileReader();
        reader.readAsDataURL(file); // Leerlo en base64

        reader.addEventListener('load', e => {
            // Visualizamos la imagen en un <img> en el HTML
            imgPreview.src = reader.result;
        });
    }
}

document.addEventListener('DOMContentLoaded', e => {
    form = document.getElementById("form1");
    imgPreview = document.getElementById("imgPreview");

    form.addEventListener("submit", sendForm);

    form.image.addEventListener("change",loadImage);
});