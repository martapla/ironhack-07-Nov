<template>
    <h1>{{ birth }}</h1>
  </template>
  
  <script setup>
  defineProps({
    birth: {
      type: String,
      required: false,
      default: "Noviembre...",
    },
  });
  </script>