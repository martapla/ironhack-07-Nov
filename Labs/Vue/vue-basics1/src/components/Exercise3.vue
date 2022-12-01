<!-- Iteration 3 | Show an element only if a particular property is set to true
One of the main reasons we use something like Vue is so we can simplify common JavaScript operations. One of the main advantages of this framework is that it allows us to display elements conditionally in a very simple way.

Let's practice this! Your challenge here is to create a boolean data inside a Vue component, and link it to an HTML element that will only show up in your template if the condition is set to true.

We've seen the v-if and v-show properties in class today; but if you're stuck, the official documentation can be very helpful here. -->


 
<template>
  <div>
    <hr />
    <h1>Exercise 3</h1>
  
    <h2 v-if="(number === 0)">This number is equal 0</h2>
    <h2 v-else>Is not equal 0</h2>
  
    <div>
      <h2 v-if="conditional">Mostramos el elemento dependiendo del booleano TRUE</h2>
      <h2 v-else>Mostramos el booleano FALSE</h2>
    </div>
  
  </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const number = ref(12);
  const conditional = ref(false);
  </script>
  
  <style >
  
  </style>