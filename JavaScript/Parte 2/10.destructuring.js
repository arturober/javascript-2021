let nombres = ["Juan", "Marta", "Pedro", "Hermenegildo", "Ana", "Tobías", "Natalia", "Paco", "Jose"];
let [nombre1, nombre2, ...resto] = nombres;
console.log(nombre1);
console.log(nombre2);
console.log(resto.toString());

function suma2primeros([n1 = 0, n2 = 0]) {
    return n1 + n2;
}

console.log(suma2primeros([4, 7, 2, 12 ,9])); // 11 
console.log(suma2primeros([8])); // 8 
console.log(suma2primeros([])); // 0
