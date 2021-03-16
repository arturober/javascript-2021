let nums = [114, 28, 9, 45, 298, 37, 6];

nums.sort((n1, n2) => n1 - n2);
console.log(nums.toString());

let nombres = ["Juan", "Marta", "Pedro", "Hermenegildo", "Ana", "Tobías", "Natalia", "Paco", "Jose"];
// Ordenar por longitud de nombre
nombres.sort((n1, n2) => n1.length - n2.length);

console.log(nombres.toString());

// Ordenar por longitud, y si son iguales, alfabéticamente
nombres.sort((n1, n2) => {
    let dif = n1.length - n2.length;
    if(dif === 0) {
        return n1.localeCompare(n2);
    }
    return dif;
});

console.log(nombres.toString());
