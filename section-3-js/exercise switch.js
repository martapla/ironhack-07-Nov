//Calculadora
//const calcNum1 = parseFloat(prompt("Enter 1st number: "));
//const calcNum2 = parseFloat(prompt("Enter 2nd number: "));


//switch (operador) {
  //  case "+":
  //      result = calcNum1 + calcNum2;
  ////      alert(`${calcNum1} +  ${calcNum2} =  ${result}`);
   //     break;


//case "-":
      //  result = calcNum1 + calcNum2;
      //  alert(`${calcNum1} -  ${calcNum2} =  ${result}`);
      //  break;


//case "*":
     //   result = calcNum1 + calcNum2;
     //   alert(`${calcNum1} *  ${calcNum2} =  ${result}`);
     ////   break;
    
    //default:
      //  alert ("Try again")
    
//}

//Ejemplo Switch casos multiples
//console.log("SWITCH - Multiple Cases");
// Ejemplo complejo - SWITCH - COUNTRY CONTINET FINDER - CASOS MULTIPLES
const countryOfOrigin = prompt("What country where you born?");
switch (countryOfOrigin.toLowerCase()) {
  case "venezuela":
  case "colombia":
  case "ecuador":
  case "brazil":
    alert(`Cool, ${countryOfOrigin} is located in South America`);
    console.log(`Cool, ${countryOfOrigin} is located in South America`);
    break;
  case "spain":
  case "france":
  case "portugal":
  case "andorra":
    alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
    console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
    break;
  default:
    alert("you are not from this planet! go Invade somewhere else...");
    console.log("you are not from this planet! go Invade somewhere else...");
}