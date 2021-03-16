let nombres = ["Juan", "Marta", "Pedro", "Hermenegildo", "Ana", "Tobías", "Natalia", "Paco", "Jose"];
let iniciales = nombres.reduce((result, nombre) => result + nombre[0], "");
console.log(iniciales); // "JMPHATNPJ"

let nums = [34, 2, 47, 57, 143, 87, 43];
let max = nums.reduce((max, num) => Math.max(max, num));
console.log(max); // 143


