let nums = [2, 16, 91, 26, 56, 46];
let max = Math.max(...nums);
console.log(max);

let nombres = ["Juan", "Marta", "Paco"];
let nombres2 = ["María", "Néstor"];

// Insertar los nombres del segundo array (nombres 2), en la posición 2 del primer array
// (detrás de Marta)

nombres.splice(2, 0, ...nombres2);
console.log(nombres);
