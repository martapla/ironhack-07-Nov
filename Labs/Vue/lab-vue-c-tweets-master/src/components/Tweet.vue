<template>
  <div class="tweet">
  
      <ProfileImage :image ="props.tweet.user.image"/>
    
    <div class="body">
      <div class="top">
        <User :userData="props.tweet.user"/>

       <Timestamp :timestamp="props.tweet.timestamp"/>
      </div>

      <Message :message ="props.tweet.message"/>
      <Action />
     
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
//Importar componentes que usamos en Tweet.vue
import ProfileImage from './ProfileImage.vue';
import User from './User.vue';
import Timestamp from './Timestamp.vue';
import Actions from './Actions.vue';
import Message from './Message.vue';
//Definir props que vienen de componente padre App.vue
const props = defineProps({
  tweet: Object,
});

console.log(props.tweet);
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
