class Persona {
    constructor(nombre = "Anónimo", edad = 100) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola!, me llamo ${this.nombre}`);
    }

    toString() {
        return `Nombre: ${this.nombre}, edad: ${this.edad}`;
    }
}

let personas = [
    new Persona("María", 25),
    new Persona("Juan", 40),
    new Persona("Eva", 15),
    new Persona("Darío", 14)
];

personas.sort((p1, p2) => p1.edad - p2.edad);
console.log('Ordenados edad: ' + personas);
personas.sort((p1, p2) => p1.nombre.localeCompare(p2.nombre));
console.log('Ordenados nombre: ' + personas);

console.log('Menores de 18: ' + personas.filter(p => p.edad < 18));


