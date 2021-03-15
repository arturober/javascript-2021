function suma(n1, n2) {
    console.log("Parámetros recibidos: " + n1 + ", " + n2);
    return n1 + n2;
}

let res = suma(5, 8);
console.log(res);

let res2 = suma("5", "8");
console.log(res2);

let res3 = suma(true, true);
console.log(res3);

let res4 = suma(3, 6, 7, 8, 3, 2);
console.log(res4);

let res5 = suma();
console.log(res5);

let valor = 14;

function creaValor() {
    let valor = 45;
    console.log("Valor dentro de la función: " + valor);
}

creaValor();
console.log("Valor fuera de la función: " + valor);