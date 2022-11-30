<template>
    <h1>{{ age }}</h1>
  </template>
  
  <script setup>
  defineProps({
    age: {
      type: String,
      required: false,
      default: "Some Random Name dentro del nieto...",
    },
  });
  </script>