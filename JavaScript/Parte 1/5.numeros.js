let n = 14.34634;
console.log(n.toFixed(2)); // 14,34

let n2 = Number.MAX_VALUE;
console.log(n2);
console.log(n2 * 2);

let n3 = Number.MIN_VALUE;
console.log(n3);
console.log(n3/2);

function esNumero(param) {
    let n = +param;
    if(Number.isNaN(n)) {
        console.log("No se ha podido tranformar a número");
    } else {
        console.log("Equivale a " + n);
    }
}

esNumero("24");
esNumero("Hola");
esNumero("");
esNumero(false);
esNumero(true);

function suma(n1, n2) {
    return +n1 + +n2;
}

console.log(suma(2,4));
console.log(suma("2","4"));

function saluda(nombre) {
    if(typeof nombre === "string" && nombre) {
        console.log(`Hola ${nombre}`);
    } else {
        console.log("No me has dicho quien eres");
    }
}
