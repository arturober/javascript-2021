function sumaPromesa(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), 5000);
    });
}

function sumaPositivosPromesa(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n1 < 0 || n2 < 0) {
                reject('Los números no pueden ser negativos');
            } else {
                resolve(n1 + n2);
            }
        }, 2000);
    });
}

async function getSuma() {
    let result = await sumaPromesa(4, 5);
    console.log(result);
}

document.addEventListener('DOMContentLoaded', async e => {
    getSuma();

    let boton = document.getElementById('hola');
    let p = document.getElementById('p1');

    boton.addEventListener('click', e => p.innerText = 'Hola mundo');
});



// sumaPositivosPromesa(-3, 4)
// .then(r => console.log(r))
// .catch(error => console.error('Error: ' + error));

