<script setup>
import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService.js'
import ButtonGoBack from '@/components/GoBackButton.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: { //1- get the id prop send from the EventCard component
    required: true,
  }
})

const event = ref(null);

onMounted(() => {
  //fetch event (by id) and set local data
  EventService.getSingleEvent(props.id) //2- get the event information using the API
    .then((response) => {
      event.value = response.data; //3- obtain event data, stored in "event" variable and update the event info on template
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
    <div class="event-nav">
      <RouterLink :to="{ name: 'event-details', params: { id } }">
        <span class="event-nav-title">Details</span>
      </RouterLink>
      |
      <RouterLink :to="{ name: 'event-register', params: { id } }">
        <span class="event-nav-title">Register</span>
      </RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit', params: { id } }">
        <span class="event-nav-title">Edit</span>
      </RouterLink>
    </div>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <ButtonGoBack :case="'home'" />
  </div>
</template>

<style scoped>
.event {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.event-nav {
  display: flex;
  margin: 2px 6px;
}

.event-nav-title {
  margin: 0 8px;
}
</style>
