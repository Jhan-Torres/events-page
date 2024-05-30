<script setup>
import { ref, onMounted, computed } from 'vue';
import EventService from '@/services/EventService.js'
import ButtonGoBack from '@/components/GoBackButton.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: { //1- get the id prop send from the EventCard component
    required: true,
  }
})

const id = computed(() => props.id)
const event = ref(null);

onMounted(() => {
  //fetch event (by id) and set local data
  EventService.getSingleEvent(id.value) //2- get the event information using the API
    .then((response) => {
      event.value = response.data; //3- obtain event data, stored in "event" variable and update the event info on template
    })
    .catch((error) => {
      console.log(error);
      router.push({ name: '404', params: { resource: 'event' } })
    })
})
</script>

<template>
  <!-- v-if to wait until has an event from the API -->
  <div v-if="event" class="event">
    <h1>{{ event.title }}</h1>
    <div class="event-nav">
      <RouterLink :to="{ name: 'event-details' }">
        <span class="event-nav-title">Details</span>
      </RouterLink>
      |
      <RouterLink :to="{ name: 'event-register' }">
        <span class="event-nav-title">Register</span>
      </RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit' }">
        <span class="event-nav-title">Edit</span>
      </RouterLink>
    </div>
    <!-- Here we send the event object to all childrens routes -->
    <RouterView :event="event" />
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
  margin: 1rem 0.5rem;
}

.event-nav-title {
  margin: 0 8px;
}
</style>
