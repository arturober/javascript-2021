let nombres = ["Juan", "Marta", "Pedro", "Ana"];

for(let i in nombres) {
    console.log(`Nombre ${i}: ${nombres[i]}`);
}
 
for(let nombre of nombres) {
    console.log(`Nombre: ${nombre}`);
}

nombres.forEach(n => console.log(`Nombre: ${n}`));
nombres.forEach((n, i) => console.log(`Nombre ${i}: ${n}`));

