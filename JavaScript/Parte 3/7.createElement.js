'use strict';

let div1 = document.getElementById('div1');

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.append("Elemento 1");

ul.append(li1);

div1.append(ul);

let li2 = document.createElement('li');
li2.append("Elemento 2");
// ul.insertBefore(li2, ul.firstChild);
// li1.insertAdjacentElement('beforebegin', li2);
// ul.insertAdjacentElement('afterbegin', li2);

ul.insertBefore(li2, li1);
console.log(ul.innerHTML);

// ul.removeChild(li1)
li1.remove(); // Lo mismo que arriba (borra el elemento)
console.log(ul.innerHTML);


