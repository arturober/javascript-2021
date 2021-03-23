// let p1 = document.body.children[0];
let p1 = document.querySelector("p:first-child");
console.log(p1);
p1.classList.add("destacado", "verde");
p1.classList.toggle("verde");
p1.classList.toggle("verde");

let input = document.querySelector("p input");
input.value = "Hola";
input.title = "Campo de texto";
input.placeholder = "Escribe algo";
input.setAttribute("prueba", "1234");

let p2 = document.body.children[1];
p2.style.color = "blue";
p2.style.marginTop = "50px";
