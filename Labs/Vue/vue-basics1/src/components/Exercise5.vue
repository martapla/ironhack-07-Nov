<!-- Creamos un div que contenga ods elementos, 1 texto que represente el contexto de lo que esta pasando y un boton.
Al div le vamos a asignar una clase bindeada, que apunte a un operador ternario. Este operador se encarga de evaluar el valor de una variable booleanica y asigne una clase dependiendo del valor true or false y otra clase como tal… {. isTrue ? ‘miClase1’ : ‘miClase2’   }
Al button le asignamos un directivo de evento mediante su @ y le asingmaos un evento que apunte hacia una funcion que se generan dentro del script que “TOGGLEA” el valor de la funcion booleanica :slightly_smiling_face: -->


<template>
    <div>
      <hr />
      <h1>Exercise 5 | Bonus</h1>
    
      <div class="container" :class="colorBoolean ? 'is-green' : 'is-orange'">
        <h3>Toggleamos entre 2 colores con operador ternario</h3>
        <button @click="changeColorFunction()">Click me to toogle color</button>
      </div>
    
      <div class="container" :class="colorChange ? 'mi-clase-1' : 'mi-clase-2'" >
        <h3>Toggleamos entre 2 colores con operador ternario</h3>
        <button @click="changeColorFunction1()">Click me to change color</button>
    
      </div>
    
    </div>
    </template>
    
    <script setup>
    import {ref, reactive} from "vue";
    const colorBoolean = ref (true);
    const changeColorFunction = () => {
        colorBoolean.value = !colorBoolean.value
    };
    const colorChange = ref (false);
    const changeColorFunction1 = () => {
        colorChange.value = !colorChange.value
    };
    </script>
    
    <style scoped>
    h2 {
      text-decoration: underline;
    }
    h3{
        color: #fafafa
    }
    .container{
        height: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .is-green{
        background: green;
    }
    .is-orange{
        background: orange;
    }
    .mi-clase-1{
        background: blue;
    }
    .mi-clase-2{
        background: grey;
    }
    </style>