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

class Usuario extends Persona {
    constructor(nombre, edad, login, pass) {
        super(nombre, edad);
        this.login = login;
        this.pass = pass;
    }

    compruebaPass(pass) {
        return this.pass === pass;
    }
}

let usuario = new Usuario("Pepe", 35, "pepito", "1234");
console.log(usuario);
console.log(usuario.nombre);
usuario.saluda();

let {nombre, login} = usuario;
console.log(nombre + ' - ' + login);

console.log('Usurio -> ' + usuario);
