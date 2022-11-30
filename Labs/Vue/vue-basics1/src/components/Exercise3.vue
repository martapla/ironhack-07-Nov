<!-- Iteration 3 | Show an element only if a particular property is set to true
One of the main reasons we use something like Vue is so we can simplify common JavaScript operations. One of the main advantages of this framework is that it allows us to display elements conditionally in a very simple way.

Let's practice this! Your challenge here is to create a boolean data inside a Vue component, and link it to an HTML element that will only show up in your template if the condition is set to true.

We've seen the v-if and v-show properties in class today; but if you're stuck, the official documentation can be very helpful here. -->


 
 <template>
   <h1>Iteration 003</h1>
   <!-- Using a v-if-v-else directive - dependind of variable "conditional" -->
   <div>
     <h4 v-if="conditional">
       Mostramos este elemento dependiendo del valor del booleano que se la
       asigna al directivo v-if sea TRUE
     </h4>
     <h4 v-else>
       Mostramos este elemento dependiendo del valor del booleano que se la
       asigna al directivo v-if sea FALSE
     </h4>
   </div>
   <!-- Using a v-show directive - dependind of variable "showmanship" -->
   <div>
     <h4 v-show="showmanship">
       Mostramos este elemento dependiendo del valor del booleano que se la
       asigna al directivo v-show sea TRUE, veremos que la differencia aca es que
       dentro del DOM no se elimina este elemento chicos ya que se le alocaliza
       una propiedad de display:none al elemento.
     </h4>
   </div>
   

   <!-- Teacher Example -->

   <!-- Using a v-if-v-else directive - dependind of variable "wuTang", with the addition of writing the conditional within the directive, basically making sure that the conditions are met -->
   <div>
     <h4 v-if="wuTang === true">
       Mostramos este elemento dependiendo del valor del booleano que se la
       asigna al directivo v-if sea TRUE
     </h4>
     <h4 v-else>
       Mostramos este elemento dependiendo del valor del booleano que se la
       asigna al directivo v-if sea FALSE
     </h4>
   </div>
 </template>
 
 <script setup>
 import { ref } from "vue";
 const conditional = ref(false);
 const showmanship = ref(true);
 const wuTang = ref(false);
 </script>
 
 <style></style>