<!-- Creamos un div que contenga ods elementos, 1 texto que represente el contexto de lo que esta pasando y un boton.
Al div le vamos a asignar una clase bindeada, que apunte a un operador ternario. Este operador se encarga de evaluar el valor de una variable booleanica y asigne una clase dependiendo del valor true or false y otra clase como tal… {. isTrue ? ‘miClase1’ : ‘miClase2’   }
Al button le asignamos un directivo de evento mediante su @ y le asingmaos un evento que apunte hacia una funcion que se generan dentro del script que “TOGGLEA” el valor de la funcion booleanica :slightly_smiling_face: -->


<template>

    <h1>Boolean Exercise</h1>
  
    <div  :class = " isTrue ? 'mi-clase1' : 'mi-clase2'" >
       <h1>Clase</h1>
       <button @click="clase">clickMe</button>
    </div>
  
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const miClase1 = ref(true)
  const miClase2 = ref(false)
  
  const clase = () => {
      miClase1.value = !miClase2.value;
      console.log(miClase2.value)
  }
  
  </script>
  
  <style>
  
  </style>