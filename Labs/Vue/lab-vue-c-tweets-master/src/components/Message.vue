<template>
  <div>
    <p class="message">
       {{props.message}}
      </p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String
})

</script>

<style>

</style>