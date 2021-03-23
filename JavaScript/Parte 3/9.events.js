document.addEventListener('DOMContentLoaded', e => {
    let img = document.getElementById("imagen");
    img.src = 'img/paisaje1.jpg';
    img.addEventListener('mouseenter', e => {
        img.src = 'img/paisaje2.jpg';
    });
    img.addEventListener('mouseleave', e => {
        img.src = 'img/paisaje1.jpg';
    });
});