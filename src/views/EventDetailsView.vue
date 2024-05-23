<script setup>
import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService.js'
import ButtonGoBack from '@/components/GoBackButton.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: { //accessing with a url param
    required: true,
  }
})

const event = ref(null);

onMounted(() => {
  //fetch event (by id) and set local data
  EventService.getSingleEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      if (error.response.status === 404) {
        router.push({ name: 'not-found' })
      }
    })
})
</script>

<template>
  <!-- v-if to wait until has an event from the API -->
  <div v-if="event" class="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <ButtonGoBack :case="'normal'" />
  </div>
</template>

<style scoped>
.event {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
