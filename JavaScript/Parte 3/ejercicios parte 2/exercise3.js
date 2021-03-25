'use strict';

let formEvento;
let imgPreview;

function validaCampo(campo) {
    campo.classList.remove('is-valid', 'is-invalid');
    campo.classList.add(campo.value? 'is-valid' : 'is-invalid');
}

function creaCard() {
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = imgPreview.src;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.append(formEvento.name.value);

    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.append(formEvento.description.value);

    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    let small = document.createElement('small');
    small.classList.add('text-muted');

    let spanPrice = document.createElement('span');
    spanPrice.classList.add('float-right');
    spanPrice.append(formEvento.price.value + '€');

    small.append(formEvento.date.value, spanPrice);

    cardFooter.append(small);

    cardBody.append(cardTitle, cardText);

    card.append(img, cardBody, cardFooter);
    document.getElementById('eventsContainer').append(card);
}

document.addEventListener('DOMContentLoaded', e => {
    formEvento = document.getElementById('newEvent');
    imgPreview = document.getElementById("imgPreview");

    formEvento.addEventListener('submit', e => {
        e.preventDefault();
        Array.from(formEvento.querySelectorAll('.form-control'))
            .forEach(validaCampo);

        if(!formEvento.querySelector('.is-invalid')) { // No hay elementos con la clase is-invalid
            creaCard();
            formEvento.reset();
            imgPreview.classList.add('d-none');
            Array.from(formEvento.querySelectorAll('.form-control'))
                 .forEach(c => c.classList.remove('is-valid'));
        }
    });

    formEvento.image.addEventListener('change', event => {
        let file = formEvento.image.files[0];
        let reader = new FileReader();
        if (file) reader.readAsDataURL(file);
        reader.addEventListener('load', e => {
            imgPreview.classList.remove('d-none');
            imgPreview.src = reader.result;
        });
    });       
});

