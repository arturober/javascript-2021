let a = [1, 2, 3, 4, 5, 6];

function cambiaValor(array) {
    array[0] = 99;
}

cambiaValor(a);
console.log(a.toString());
