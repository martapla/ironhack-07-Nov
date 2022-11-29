<!-- // Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro. -->

 <!-- // Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!". -->

 <!-- Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript rodeo". -->


<template>
    <div id="class-excercises">
    <div id="ejercicio1">
      <h2>Ejercicio 01</h2>
      <!-- Reactive Data Type -->
      <h1 v-if="ejercicio1.isTrue === false">
        I'm showing up beacuse our reactive data is true!
      </h1>
      <h1 v-else>
        I'm the option anytime our reactive data cannot be read as true
      </h1>
      <!-- Ref Data Type -->
      <h1 v-if="ejemplo2">I'm showing up beacuse our reactive data is true!</h1>
      <h1 v-else>
        I'm the option anytime our reactive data cannot be read as true
      </h1>
    </div>
    <div id="ejercicio2">
      <h2>Ejercicio 02</h2>
      <p v-if="language === 'HTML'">Today we are learning {{ language }}</p>
      <p v-else-if="language === 'CSS'">Today we are learning {{ language }}</p>
      <p v-else-if="language === 'JS'">Today we are learning {{ language }}</p>
      <p v-else>Today there's no class just WU TANG PARTY!</p>
    </div>
    <div id="ejercicio3">
      <h2>Ejercicio 03</h2>
      <!-- Example 001 - reactive data containing the boolean -->
      <div v-if="bio.show">
        <h1>{{ bio.name }}</h1>
        <p v-if="bio.age > 18">I am an adult!</p>
        <p v-else>I'm still a young git!</p>

        <p v-if="bio.hasCodeBefore">
          YES LAWD, This is not my first time at the javascript rodeo
        </p>
        <p v-else>I am still a newbie to code but I'm learning fast</p>
      </div>
      <div v-else>Yo go get famous cause there's no bio for you!</div>
      <!-- Example 002 - ref data containing the boolean -->
      <div v-if="show">
        <h1>{{ bio.name }}</h1>
        <p v-if="bio.age > 18">I am an adult!</p>
        <p v-else>I'm still a young git!</p>

        <p v-if="bio.hasCodeBefore">
          YES LAWD, This is not my first time at the javascript rodeo
        </p>
        <p v-else>I am still a newbie to code but I'm learning fast</p>
      </div>
      <div v-else>Yo go get famous cause there's no bio for you!</div>
    </div>
  </div>

</template>



<script>
import { ref,reactive } from "vue";

// Ejercicio 001
const ejercicio1 = reactive({
  isTrue: true,
  isFalse: false,
});
const ejemplo2 = ref(false);
// Ejercicio 002
const language = ref("CSS");
//EJercicio 003
const bio = reactive({
  name: "Anderson Paak",
  age: 41,
  hasCodeBefore: false,
  show: false,
});
const show = ref(true);


   
</script>

<style>

</style>