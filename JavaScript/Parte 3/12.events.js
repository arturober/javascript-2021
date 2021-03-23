function selectItem(e) {
    e.target.classList.toggle("selected");
}

document.addEventListener('DOMContentLoaded', e => {
    let ul = document.getElementById("list");
    Array.from(ul.children).forEach(li => {
        li.addEventListener('click', selectItem);
    });
});