// Iteration 1: Names and Input

const hacker1 = "driver's name";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "navigator's name";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1 > hacker2.length) {
    console.log(`The driver has the longest name, it has XX characters.`);

} else if (hacker2 > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has XX characters.`);

} else if ((hacker1.length === hacker2.length)) {
     console.log(`Wow, you both have equally long names, XX characters!.`);
}


// Iteration 3: Loops
