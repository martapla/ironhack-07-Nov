<template>
 <img
      :src="props.image"
      className="profile"
      alt="profile"
    />
</template>

<script setup>
  const props = defineProps({
  image: String,
});
</script>

<style>

</style>