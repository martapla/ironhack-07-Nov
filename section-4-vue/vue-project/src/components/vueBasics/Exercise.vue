<template>



<p>Mi name is {{myInfo.name}} and I'm {{myInfo.age}} old.
     I was born the {{myInfo.dateOfBirth}}. My hobbies are {{myInfo.hobbies[0]}}, {{myInfo.hobbies[1]}} and {{myInfo.hobbies[2]}}. My favourite film is {{film}}, I've seen it {{timefilmSeen}} times and my favourite food is {{food}}.</p>
    
    
 </template>
    
<script setup>
import { ref, reactive } from "vue";

const myInfo = reactive({
    name:"Marta",
    age: 61,
    dateOfBirth: "2/2/1920",
    hobbies: ["reading","walking","cooking"],
  
});

const film = "Tan lejos tan cerca";
const food = "soup";
const timefilmSeen = 3;



    </script>
    
    <style></style>
    