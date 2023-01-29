<!-- // Ejercicios para practicar con Pinia
// Ej. 1: Vamos a crear un contador. En el repo de proyecto donde estéis trabajando nos creamos una carpeta "stores". Dentro creamos el archivo counter.js. Este archivo debe tener la estructura que hemos visto de una Pinia Store. Dentro de la store, en el state, vamos a incluir una key "count" y setearla en 0.
// Creamos un componente Counter.vue. Este componente lo que hará es enseñar el valor de count que tenemos en counter.js. Después le vamos a añadir dos botones: uno para incrementar el count y otro para restarle 1. Vuestro objetivo será que estos botones alteren el valor de count que tenemos en la store, usando métodos también dentro de vuestra store. -->

<template>
    <p>{{counterStore.count}}</p>
   <button @click ="counterStore.increase">+</button>
   <button @click ="counterStore.decrease">-</button>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useCounterStore } from '../stores/Ex.CounterPinia.js';
  
  const counterStore = useCounterStore(); // Fem variable, i la passem a linia 6 (queda mes net)
  
  
  </script>
  
  <style>
  
  </style>






