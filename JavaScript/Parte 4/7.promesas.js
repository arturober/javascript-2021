function sumaPromesa(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2),2000);
    });
}

function sumaPositivosPromesa(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n1 < 0 || n2 < 0) {
                reject('Los números no pueden ser negativos');
            } else {
                resolve(n1 + n2);
            }
        },2000);
    });
}

let result = sumaPromesa(4, 5);
result.then(result => console.log(result));

sumaPositivosPromesa(-3, 4)
.then(r => console.log(r))
.catch(error => console.error('Error: ' + error));

console.log("Instrucción del programa principal");
console.log("Instrucción del programa principal 2");
