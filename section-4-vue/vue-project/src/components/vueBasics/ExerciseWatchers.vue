<!-- // Ejercicio de watchers
// Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida
//EJEMPLO DEL JSON
// [
//   {
//     "answer": "no",
//     "image": "https://t3.ftcdn.net/jpg/03/36/81/88/360_F_336818845_1tvrNYhwr19LfGiC4BDAeCJzm0mVHH48.jpg"
// }
// ] -->

<template>
  <h1>Question</h1>
  <input type="text">
  <p>respuesta json!</p>

</template>

<script setup>

import jsonAnswers from "./Watchers/archivo.json"

const question2 = ref("Te gusta la pizza?");
const answer2 = ref("");
const jsonResponse = ref("");
const jsonImage = ref("");

watch(answer2, async (newAnswer) => {
    if (answer2.value === "yes") {
        jsonResponse.value = jsonAnswer[0].response + " ,te encanta la pizza!"
    }
    else if ()
})
 
</script>

<style>

</style>