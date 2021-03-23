console.log(document.body.children);

// let ul = document.body.children[0];
let ul = document.body.firstElementChild;
// Array.from(ul.children).forEach(li => console.log(li.innerText));

let li = ul.firstElementChild;
while(li) {
    console.log(li.innerText);
    li = li.nextElementSibling;
}

console.log(ul.parentElement);