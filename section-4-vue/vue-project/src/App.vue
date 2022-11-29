<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyFirstComponentVue from './components/vueBasics/MyFirstComponent.vue';
import ExerciseVue from './components/vueBasics/Exercise.vue';
import Attribute from './components/vueBasics/4-Attribute-binding.vue'
</script>

<template>
  <header>
   
    <div class="wrapper">
      <HelloWorld msg="Bondia!" />
    </div>
  </header>

  <main>
   <Attribute/>
    <ExerciseVue/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
