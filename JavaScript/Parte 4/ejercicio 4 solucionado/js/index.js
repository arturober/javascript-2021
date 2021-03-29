"use strict";

let eventList = [];
let newEventForm = null;

document.addEventListener("DOMContentLoaded", async e => {
    newEventForm = document.getElementById("newEvent");

    newEventForm.image.addEventListener('change', loadImage);
    newEventForm.addEventListener('submit', validateForm);

    eventList = await Evento.getEvents();
    showEvents(eventList);
});

async function validateForm(event) {
    event.preventDefault();

    let ok = true;
    // Comprobamos todos los campos para detectar alguno vacío.
    Array.from(newEventForm.querySelectorAll(".form-control")).forEach(input => {
        input.classList.remove("is-valid", "is-invalid");
        if(!input.value) {
            input.classList.add("is-invalid");
            ok = false;
        } else {
            input.classList.add("is-valid");
        }
    });

    if (ok) {
        const title = newEventForm.name.value;
        const image = document.getElementById("imgPreview").src;
        const date = newEventForm.date.value;
        const description = newEventForm.description.value;
        const price = newEventForm.price.value;

        let newEvent = new Evento({title, image, date, description, price});
        try {
            const evento = await newEvent.post();
            eventList.push(evento);
            showEvents(eventList)
            newEventForm.reset();
            newEventForm.querySelectorAll(".is-valid").forEach(input => input.classList.remove("is-valid"));
            document.getElementById("imgPreview").src = '';
        } catch (e) {
            console.log(e);
        }
    }
}

function loadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    });
}

function showEvents(events) {
    let container = document.getElementById("eventsContainer");
    while (container.firstChild) { // Delete all children
        container.removeChild(container.firstChild);
    }

    events.forEach(event => {       
        let eventCard = event.toHTML();
        // Añadimos el evento de borrado al botón "Delete"
        eventCard.querySelector('.card-body .btn-danger').addEventListener("click", async e => {
            let del = confirm("¿Seguro que quieres borrar el evento?");
            if(del) {
                await event.delete();
                eventList.splice(eventList.indexOf(event), 1);
                showEvents(eventList);
            }  
        });
        container.appendChild(eventCard);
    });
}
