let persona = new Object();
persona.nombre = "Pepe";
persona.edad = 43;
persona.saluda = function() {
    console.log(`Me llamo ${this.nombre}`);
}
console.log(persona);
persona.saluda();

let persona2 = {
    nombre: 'Pepe',
    edad: 43,
    saluda() {
        console.log(`Me llamo ${this.nombre}`);
    }
};
console.log(persona2);
console.log(persona2.nombre);
console.log(persona2['edad']);

// for(let prop in persona2) { // Recorrer propiedades objeto
//     console.log(`${prop}: ${persona2[prop]}`);
// }

persona2.saluda();

console.log(JSON.stringify(persona2));

let prod = JSON.parse('{"precio":24, "descripcion": "Mesa"}');
console.log(prod);
console.log(prod.precio);
console.log(prod.descripcion);


