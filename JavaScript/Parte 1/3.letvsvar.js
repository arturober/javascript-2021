let ok = true;

if(ok) {
    let num = 14;
}

// console.log(num); -> ERROR (con var muestra 14)

for(let i = 1; i <= 10; i++) {
    let p = document.createElement("p");
    p.innerText = "Párrafo " + i;
    p.addEventListener('click', e => console.log("Click en párrafo " + i));
    document.body.append(p);
}

