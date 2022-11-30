<template>
  <div>
    <h2>Exercise 2 - Math Operation:</h2>
    <p> 2+2 = {{ 2 + 2 }}</p>
  </div>

  <!-- Second Part -->

  <div>
        <h2>{{hello ()}}</h2>
  </div>

</template>

<script setup>

  const hello = () => {
      return " Hello have a good day!"
    }
  


</script>


<style>

</style>