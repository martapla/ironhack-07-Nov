<template>
    <button v-on:click="sayHiInternal()">Child</button>
</template>

<script setup>
const sayHiInternal = () => {
  alert("Emit!!");
};
</script>

<style>

</style>