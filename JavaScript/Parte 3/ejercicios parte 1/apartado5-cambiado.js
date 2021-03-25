let colorInput;

function cambiaColor(e) {
    let celda = e.target;
    celda.style.backgroundColor = colorInput.value;
    console.log(colorInput.value);
}

document.addEventListener('DOMContentLoaded', e => {
    colorInput = document.getElementById("color");
    Array.from(document.querySelectorAll(".cell"))
    .forEach(celda => celda.addEventListener('click', cambiaColor));
});
