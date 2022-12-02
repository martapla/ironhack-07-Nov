<!-- Montamos un formulario para ir al primavera sound. Vamos a incluirle un input type text para vuestro nombre y un input type email para el email. Vamos incorporar un select que nos permita escoger entre cinco artistas para ver en el festival. Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
Consumes alcohol o drogas? (si/no)
Vas a venir vestid@ de negro? (si/no)
Tienes más de 21 años? (si/no)
Vienes con un grupo de más de 2 personas? (si/no)
Por ultimo hacemos input textarea para sugerencias de mejora del festival.
Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser. -->

<template>
<div id="myForm">  
    <h1> Primavera Sound Form </h1>
      <div id="form-v-model-visibilidad">
        <!-- <pre>{{ JSON.stringify(formValues, null, 1) }}</pre> -->
      </div>

      <!-- //Name Input -->
      <form @submit.prevent="submitForm">
        <div id="user-name">
          <label for="name">Enter Name</label>
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model="formValues.formName"
          />
      </div>

      <!-- Email Input -->
      <div id="user-mail">
          <label for="mail">Enter Email</label>
          <input
            type="email"
            autocomplete="off"
            id="email"
            v-model="formValues.formEmail"
          />
      </div>

      <!-- Select Artists  -->
      <div id="user-artists">
        
          <label>Choose 3 artists:</label>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="blur"
              value="blur"
              v-model="formValues.artists"
            />
            <label for="blur">Blur</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="darkside"
              value="darkside"
              v-model="formValues.artists"
            />
            <label for="darkside">Darkside</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="letigre"
              value="letigre"
              v-model="formValues.artists"
            />
            <label for="letigre">Le Tigre</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="fka"
              value="fka"
              v-model="formValues.artists"
            />
            <label for="fka">FKA Twigs</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="john"
              value="john"
              v-model="formValues.artists"
            />
            <label for="john">John Talabot</label>
          </div>
        </div>

      <!-- Drugs or Alcohol -->
      <div id="user-habits">
         <label>What do you consume?</label>
            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="alcohol"
                value="alcohol"
                v-model="formValues.badHabits"
                />
                <label for="alcohol">Alcohol</label>
            </div>

            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="drugs"
                value="drugs"
                v-model="formValues.badHabits"
                />
                <label for="drugs">Drugs</label>
            </div>
        </div> 
        
        <!-- Dress in Black? -->
      <div id="dresscode">
        <label>Will you come dressed in black?</label>
            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="yes"
                value="yes"
                v-model="formValues.dressCode"
                />
                <label for="yes">Yes</label>
            </div>

            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="no"
                value="no"
                v-model="formValues.dressCode"
                />
                <label for="no">No</label>
            </div>
       </div>

        <!-- Are you older than 21? -->
        <div id="age">
        <label>Are you older than 21?</label>
            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="yes"
                value="yes"
                v-model="formValues.age"
                />
                <label for="yes">Yes</label>
            </div>

            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="no"
                value="no"
                v-model="formValues.age"
                />
                <label for="no">No</label>
            </div>
       </div>

       <!-- More than 2 friends? -->
       <div id="user-friends">
        <label>You come with more than two friends?</label>
            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="yes"
                value="yes"
                v-model="formValues.quantityFriends"
                />
                <label for="yes">Yes</label>
            </div>

            <div class="multiple-checkboxes">
                <input
                type="radio"
                id="no"
                value="no"
                v-model="formValues.quantityFriends"
                />
                <label for="no">No</label>
            </div>
       </div>

       <!-- Any Suggestions? -->
       <div id="user-suggestions">
          <label for="suggestions">Please, tell us your suggestions to improve the festival!</label>
          <textarea
            name="suggestions"
            id="suggestions"
            cols="40"
            rows="5"
            v-model.trim.lazy="formValues.suggestions"
          ></textarea>
        </div>

      <!-- Submit Button -->
      <input type="submit" value="Submit Form" />


</form>

</div> 
</template>

<script setup>
import { reactive } from "vue";
// Primavera Sound Data
const formValues = reactive({
    formName: "",
    email: "",
    artists: [],
    badHabits: false,
    dressCode: false,
    age: false,
    quantityFriends: "",
    suggestions: "",
});
function submitForm() {
   
  alert(`

  Thank you for your details!!!

  Name: ${formValues.formName}
  Email: ${formValues.email}
  Artists:${formValues.artists}
  Habits: ${formValues.badHabits ? "stay hidrated!" : "drink water!"}
  Dress in Black?: ${formValues.dressCode}
  Older than 21?: ${formValues.age}
  More than 2 friends?: ${formValues.quantityFriends}
  Suggestions for the festival:${formValues.suggestions}
  
  `);

}

</script>


<style scoped>
pre {
  font-size: 24px;
}
div {
  display: flex;
  flex-direction: column;
}
.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}
.form-class-container {
  min-width: 75%;
}
label {
  font-size: 1rem;
}
</style>
