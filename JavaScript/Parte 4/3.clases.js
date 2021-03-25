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

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }
}

let p = new Persona("Juan", 24);
p.setEdad(35);
console.log(p.getEdad());