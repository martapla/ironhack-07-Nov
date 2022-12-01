<template>
  <div>
    <h1>Exercise 2 - Math Operation:</h1>
    <h2> 2+2 = {{ 2 + 2 }}</h2>
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