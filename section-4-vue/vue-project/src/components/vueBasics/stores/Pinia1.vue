<template>
  p{{brand}}

</template>

<script setup>
import { ref } from 'vue';
import { usePinia } from '../stores/piniaStores';

const piniaStores = usePiniaStore();

const brand = ref(piniaStores().brand);

</script>

<style>

</style>