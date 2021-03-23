let div1 = document.getElementById('div1');
// let div1 = document.querySelector('#div1');

console.log(div1);
console.log(div1.getElementsByTagName("a"));
console.log(div1.getElementsByClassName("normalLink"));

console.log(document.querySelectorAll('#div1 a'));
console.log(document.querySelectorAll('#div1 a.specialLink'));
console.log(document.querySelectorAll('#div1 a[title^=hello]'));
