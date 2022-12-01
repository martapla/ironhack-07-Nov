<template>
    <div>
   <span class="timestamp">{{props.timestamp}}</span>
</div>
</template>

<script setup>
const props = defineProps({
  timestamp: String,
});
</script>

<style>

</style>