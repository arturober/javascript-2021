let nombres = ["Juan", "Marta", "Pedro", "Ana"];

let borrados = nombres.splice(1, 2);

console.log(`Nombres actuales: ${nombres}`); // Juan,Ana
console.log(`Nombres borrados: ${borrados}`);

nombres.splice(1, 0, "Pepe", "John", "Agustín");
console.log(`Nombres actuales: ${nombres}`); // Juan,Pepe,John,Agustín,An

nombres.splice(1, 1, "Paco");
console.log(`Nombres actuales: ${nombres}`); // Juan,Paco,John,Agustín,An

