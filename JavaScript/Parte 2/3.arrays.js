let nombres = ["Juan", "Marta", "Pedro", "Ana"];

console.log(nombres.toString());

nombres.unshift("Antonio", "María");
nombres.push("Iker", "Sara");

console.log(nombres.toString());

nombres.shift(); // Elimina la primera posición
nombres.pop(); // Elimina la última

console.log(nombres.toString());
