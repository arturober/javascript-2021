'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

console.log('--------------- APARTADO 1 -----------------');

function ejercicio1(cadena1, cadena2) {
    if(typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        console.error("Una de los parámetros no es un string");
        return;
    }

    if(cadena1.length > cadena2.length) {
        console.log(`'${cadena1}' es mayor que '${cadena2}'`);
    } else if (cadena2.length > cadena1.length) {
        console.log(`'${cadena2}' es mayor que '${cadena1}'`);
    } else {
        console.log("Las cadenas son iguales");
    }
}

ejercicio1("casa", "caracol");
ejercicio1("casa", "cosa");
ejercicio1("Hola que tal", "bien");
// ejercicio1("Hola", 24);
ejercicio1();

/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function ejercicio2(veces, num) {
    let resultado = "";
    for(let i = 0; i < veces; i++) {
        resultado += num + " ";
        num *= 2;
    }
    console.log(resultado);
}

ejercicio2(10, 2);
ejercicio2(4, 5);

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');

function apartado3(cadena, car) {
    cadena = "" + cadena;
    car = "" + car;
    if(car.length !== 1) {
        console.error("El segundo parámetro debe se un carácter");
    } else {
        let cont = 0;
        for(let i = 0; i < cadena.length; i++) {
            if(cadena[i] === car) {
                cont++;
            }
        };
        console.log(`Se ha encontrado el carácter '${car}' ${cont} veces en la cadena ${cadena}`);
    }
}

apartado3("Hola que tal", "a");
apartado3("momomomomomo", "m");

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   numéros válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no númerico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function apartado4(nombre = "Producto genérico", precio = 100, impuesto = 21) {
    precio = +precio;
    impuesto = +impuesto;

    if(Number.isNaN(precio) || Number.isNaN(impuesto)) {
        console.error("Error: El precio o impuesto no son númericos");
    } else {
        console.log(`El producto ${nombre} tiene un precio de ${precio * (1 + impuesto / 100)}`);
    }
}

apartado4();
apartado4("Silla");
apartado4("Coche", 20000, 17);
apartado4("Mesa", "Hola", 23)

/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

const apartado5 = (cadena, trozo) => {
    if(cadena.toLocaleLowerCase().includes(trozo.toLocaleLowerCase())) {
        console.log(`La cadena '${cadena}' incluye '${trozo}'`);
    } else {
        console.log(`La cadena '${cadena}' NO incluye '${trozo}'`);
    }
}

apartado5("Estoy dando clase", "CLASE");
apartado5("Estoy dando clase", "perro");

