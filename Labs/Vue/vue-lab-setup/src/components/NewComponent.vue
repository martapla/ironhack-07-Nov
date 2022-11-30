
<template>

  <h1>First Vue Lab!</h1>

  <h3> My name is {{name}} and I'm from {{city}} ⭐ </h3>


  <!-- <button v-on:click="yes">Click me</button> // Long Sintax  -->

  <button @click="helloWorld">Click me</button>  

</template>

<script setup>
import { ref } from "vue";

const name = ref ("Marta");
const city = ref ("Barcelona");



const helloWorld = () => {
  console.log("Hello World");
    alert("Hello World");
}

</script>

<style>

</style>