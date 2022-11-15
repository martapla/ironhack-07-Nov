// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.

const array = ["f", 8, 7, "k"];


for (let i = 0; i < array.length; i++){
    console.log(typeof array[i]);
}



// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

const array2 = ["Dali", "Miro", "VanGogh"];

for (let i = 0; i < array2.length; i++){
    console.log( `${array2[i]} is so famous, I love them.`);
}


//Ejercico Metodos Array

 //Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
// ya estos metodosNativo de Array existen :

//Sense funcions:

/*let array3 = ["blue", "red", "green"];

array3.push("orange");

console.log(array3);

array3.unshift("white");

console.log(array3);*/

// Amb funcions: //no esta bé

let array3 = ["blue", "red", "green"];
let element1 = "pink";
let element2 =  "black";

function colors(list) {
    list.push(element1);
    list.unshift(element2);
    return list;
}

console.log(colors);


