<script setup>

import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Exercise2Vue from './components/Exercise2.vue'
import Exercise3Vue from './components/Exercise3.vue'
import Exercise4Vue from './components/Exercise4.vue'
import Exercise5Vue from './components/Exercise5.vue'
</script>

<template>
  <header>
   
    <h1>Lab: Vue-Basics</h1>
  </header>

  <main>
    <Navbar />
    <Exercise2Vue />
    <Exercise3Vue />
    <Exercise4Vue />
    <Exercise5Vue />
    <Footer />
   
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
