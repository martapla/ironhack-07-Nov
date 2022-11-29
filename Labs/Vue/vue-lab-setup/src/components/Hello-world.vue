//Iteration 1: Create component
<template>

  <h1>{{day}}</h1>

  <button v-on:click="yes">Click me</button> // Long Sintax 


  <button @click="yes">Click me</button> // Short Sintax

</template>

<script setup>
import { ref } from "vue";

const day = ref("Have a nice day!")

const yes = () => {
    console.log("Hello yes");
}

</script>

<style>

</style>