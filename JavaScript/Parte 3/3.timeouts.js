// function sayHello(){
//     console.log("Hola mundo");
// }

// setTimeout(() => console.log("Hola mundo"), 3000);

// setInterval(() => console.log("Hola mundo"), 3000);

let n = 1;

let interval = setInterval(() => {
    console.log(n++);
    if(n > 10) {
        clearInterval(interval);
    }
}, 2000);
