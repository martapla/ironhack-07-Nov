// Iteration 1: Names and Input

const hacker1 = "Maria";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Marc";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else if ((hacker1.length === hacker2.length)) {
     console.log(`Wow, you both have equally long names, ${hacker1.length}   characters!.`);
}


// ---Iteration 2: Conditionals-Operador Ternario----  //

//[hacker1.length > hacker2.length][? ""][: ""]

//[?""] si es verdadero - se ejecuta este

// [:""] si no, se ejecuta este

hacker1.length > hacker2.length
    ? console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`)
    : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);


hacker1.length > hacker2.length
    ? console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    )
    : hacker1.length === hacker2.length
        
    ? console.log(
        `Wow, you both have equally long names, ${hacker1.length}  characters!.`)

    : console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );


// Iteration 3: Loops

let reservedName = " ";
for (let i = 0; i < hacker1.length; i++) {
    reservedName += hacker1[i].toUpperCase() + "";
}
console.log(reservedName);

// Iteration 3.1 - Usando metodos nativos
let upperCaseName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCaseName);

// Iteration 3.1 - Usando metodos nativos y spread operator
let upperHacker = hacker1.toUpperCase();
let arrayHacker = [...upperHacker].join(""); // Spread operator
console.log(arrayHacker);

//Iteration 3.2 - Reverse order

//Iteration 3.2 - Loop
let reverseName = " ";
for (let i = hacker1.length - 1; i >= 0; i--){
    reverseName += hacker1[i];
}
console.log(reverseName);

// Iteration 3.2 - Usando metodo nativo
const reverseNameSimplified = hacker1.split("").reverse().join("");
console.log(reverseNameSimplified);

// ITERATION 3 - Reverse Order
//Iteration 3.3 - Condicional sencillo
if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  
  //Iteration 3.3 - Condicional sencillo dentro de una funcion :)
  //Declarar una función
  // SYNTAX
  // function nameOfFunction() {
  //     // function body
  // }
  // nameOfFunction()
  
  function ordenLexicoGrafico(string1, string2) {
    if (string1 > string2) {
      console.log("The driver's name goes first.");
    } else if (string1 < string2) {
      console.log("Yo, the navigator goes first definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }
  }
  ordenLexicoGrafico(hacker1, hacker2);
  console.log("-------------------");
  
// BONUS TIME
// BONUS 1 - LOREM IPSUM "ET" FINDER

let lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ad voluptatum beatae quisquam autem nisi ullam nihil a veniam nam pariatur dolores temporibus animi atque, quidem sapiente veritatis quae adipi et";

// trimmear todos los blank spaces
let trimmedLorem = lorem.trim();

// contar la cantidad de palabras
let etCount = 0;
for (key of trimmedLorem) {
  if (key === " et ") etCount += 1;
}
console.log(`La cantidad de palabras et: ${etCount + 1}`);

// BONUS 2 - SPLIT & REVERSE
let phraseToCheck = "amor roma";
let phraseToCheckPalindrome = phraseToCheck.split("").reverse().join("");

if (phraseToCheck.toLowerCase() == phraseToCheckPalindrome.toLowerCase()) {
  console.log("THE STRING IS A PALINDROME");
} else {
  console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome);