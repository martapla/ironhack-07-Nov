<template>
  <div class="tweet">
    <ProfileImage :image="props.tweet.user.image"
   />

    <div class="body">
      <div class="top">
        <span class="user">
          <span class="name">{{props.tweet.user.name}}</span>
          <span class="handle">@{{props.tweet.user.handle}}</span>
        </span>

        <span class="timestamp">{{props.tweet.user.timestamp}}</span>
      </div>

      <Message :message ="props.tweet.message"/>

      <p class="message">
       {{props.tweet.message}}
      </p>

      <div class="actions">
        <!-- Font Awesome icons -->
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
//Importar componentes
import ProfileImageVue from './ProfileImage.vue';
import UserVue from './User.vue';
import TimestampVue from './Timestamp.vue';
import ActionsVue from './Actions.vue';
import MessageVue from './Message.vue';
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
