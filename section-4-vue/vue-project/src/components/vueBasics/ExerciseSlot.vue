<!-- Crear 2 componentes que reciban slots:
El primer componente será un botón que recibirá un slot con el texto que queráis.
El segundo componente debe tener 2 slots. Uno en un div y el otro formando parte de una lista -->


<template>
  <div>
    <p> <slot/> </p>
  </div>
  <ol>
    <li><slot/></li>
    <li><slot/></li>
    <li><slot/></li>
  </ol>
</template>

<script setup>

</script>

<style>

</style>