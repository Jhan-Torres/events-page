<script setup>
import { inject } from "vue";

const props = defineProps({
  event: {
    required: true,
  }
})

//make the GStore object available inside this component
const GStore = inject("GStore");

const register = () => {
  GStore.flashMessage = "You are successfully registered for " + props.event.title;
  setTimeout(() => {
    GStore.flashMessage = "";
  }, 2000);
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">
    Register Me
  </button>
</template>
