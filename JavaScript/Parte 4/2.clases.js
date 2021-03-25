class Persona {
    static miembros = []; // EXPERIMENTAL

    constructor(nombre = "Anónimo", edad = 100) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola!, me llamo ${this.nombre}`);
    }

    static addMiembro(persona) {
        Persona.miembros.push(persona);
    }
}

let p = new Persona("Juan", 30);
let p2 = new Persona();

console.log(p);
console.log(p2);

p.saluda();

Persona.addMiembro(p);
Persona.addMiembro(p2);
console.log(Persona.miembros);
