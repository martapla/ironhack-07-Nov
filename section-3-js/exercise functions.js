/*
let age = 18;
let welcome =
    age < 18
        ? () => console.log("Hello you")
        : () => {
            console.log("Cream");
        };

welcome();


//Ejemplo 7
//Function-multiple params-multiple lines

let sum = () => {
    let result = a + b;
    return result;
};

let resultOfSum = sum(5, 89)
console.log(resultOfSum)
*/


// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera. Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad". Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

/*let name = "Mar";
let age = 60;
let lives = {
    livesInCity: true,
    livesInTown: false,
}

let info =
    lives.livesInCity === true
        ? () => console.log(`${name} has ${age} years, and lives in the city `)
        : () => console.log(`${name} has ${age} years, and lives in a town`);
        
info()

*/
//con parametros

function myFunction(name,age,lives)  {
    lives.livesInCity 
        ? () => console.log(`${name} has ${age} years, and lives in the city `)
        : () => console.log(`${name} has ${age} years, and lives in a town`);
    
}

console.log(myFunction("Mar", 60, {livesInCity: true, livesInTown: false }));