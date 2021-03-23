'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (incluida)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por "==>"
 */

console.log('--------------- APARTADO 1 -----------------');

let a1 = [0, 1, 2, 3];
a1.push(4, 5);
a1.unshift(-2, -1);
console.log(a1.toString());
a1.splice(3, 3);
console.log(a1.toString());
a1.splice(a1.length - 1, 'a', 'b');
console.log(a1.toString());
console.log(a1.join(' ==> '));

/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa rest para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

console.log('--------------- APARTADO 2 -----------------');

function printMedia(nombre, ...notas) {
    let media = notas.reduce((total, n) => total + n) / notas.length;
    console.log(`La media de ${nombre} es ${media.toFixed(2)}`);
}

printMedia("Pepe", 4.25, 6, 8.5, 9);
printMedia("Marta", 7.5, 3.8, 7, 9.25);

/**
 * Apartado 3
 * Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

console.log('--------------- APARTADO 3 -----------------');

let cadenas = ["perro", "gato", "pradera", "teclado", "estafilococo", "oso"];
console.log('Array original: ' + cadenas.toString());
cadenas.sort((c1, c2) => c2.length - c1.length);
console.log('Array ordenado: ' + cadenas.toString());

/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) lo transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado
 */

console.log('--------------- APARTADO 4 -----------------');

let numeros = [24, 1643, 345, 87, 235, 24914];

let sumaCifras = numeros
    .map(num => Array.from("" + num)
                     .reduce((total, c) => total + +c, 0));
    
console.log('Array original: ' + numeros.join(' - '));
console.log('Array cifras sumadas: ' + sumaCifras.join(' - '));

/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 5 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos'],
    ['Mesa', 'ERROR: El stock no puede ser negativo']
];

let msgMap = new Map();

mensajes
    .filter(([prod, msg]) => msg.startsWith('ERROR')) // Combinamos filter con desestructurar array
    .forEach(([prod, msg]) => {
        if(msgMap.has(prod)) { 
            msgMap.get(prod).push(msg); // Si ya existe, añadimos el mensaje al array asociado
        } else {
            msgMap.set(prod, [msg]);
        }
    });

msgMap.forEach((msgArray, prod) => console.log(`${prod}: \n\t${msgArray.join("\n\t")}`));

console.log(msgMap);

/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 6 -----------------');

function area(l1, l2, angulo) {
    const angRad = angulo * Math.PI / 180;
    return l1 * l2 * Math.sin(angRad) / 2;
}

console.log(`Área triángulo (lado 1: 14, lado 2: 20, ángulo: 60): ${area(14, 20, 60)}`);


/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 7 -----------------');

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function formatFecha(f) {
    const fecha = new Date(f);
    console.log(`${DIAS[fecha.getDay()]}, ${fecha.getDate().toString().padStart(2, '0')} de ${MESES[fecha.getMonth()]} de ${fecha.getFullYear()}`);
}

formatFecha('2018-10-23');
formatFecha('2020-01-03');
formatFecha('2019-08-14');

