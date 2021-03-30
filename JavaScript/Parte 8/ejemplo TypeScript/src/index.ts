import { Persona } from "./Persona.class";

let nombre: string; // Tipado explícito
nombre = "Hola";

let num = 15; // Tipado implícito
// num = "hola"; -> ERROR (string -> number)

console.log("HOla mundo");

let a: number[] = []; // En este caso tipado implícito
a[0] = 1;

interface Rectangulo {
    ancho: number;
    alto?: number;
}

let rectangulo: Rectangulo = {
    ancho: 20,
    alto: 12,
};

function areaRect(rectangulo: Rectangulo): number {
    if(rectangulo.alto) {
        return rectangulo.ancho * rectangulo.alto;
    }
    return rectangulo.ancho**2;
}

let area = areaRect({ancho: 3, alto: 16});
console.log(area.toFixed(2));

console.log(areaRect(rectangulo));
console.log(areaRect({ancho: 12}));

let fecha: Date;
fecha = new Date();

let persona = new Persona("Pepe", 12);
console.log(persona.getNombre());

document.addEventListener("DOMContentLoaded", e => {
    let input = document.getElementById("nombre") as HTMLInputElement;
    let boton = document.getElementById("boton") as HTMLButtonElement;
    let parrafo = document.getElementById("saluda") as HTMLParagraphElement;

    boton.addEventListener('click', e => {
        let nombre = input.value;
        parrafo.innerText = 'Hola, soy ' + nombre;
    });
});
