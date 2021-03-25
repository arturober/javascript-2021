class Persona {
    #nombre;
    #edad;

    constructor(nombre = "Anónimo", edad = 100) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saluda() {
        console.log(`Hola!, me llamo ${this.nombre}`);
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        this.#edad = edad;
    }

    get saludo() {
        return `Me llamo ${this.nombre}`;
    }
}

let p = new Persona("Juan", 24);
p.edad = 35;
console.log(p.edad);
console.log(p.saludo);