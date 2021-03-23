document.addEventListener('DOMContentLoaded', e => {
    let div = document.getElementById("div1");
    div.addEventListener("mousemove", e => {
        div.innerText = `${e.offsetX}, ${e.offsetY}`;
    });
});