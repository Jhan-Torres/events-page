<script setup>
import { ref, onMounted, computed, watchEffect } from 'vue';
import EventService from '@/services/EventService';
import EventCard from '@/components/EventCard.vue';

//Data refs
const events = ref(null);
const totalEvents = ref(0);

//page prop from route query, send from
const props = defineProps(["page"]);

//Computed
const currentPage = computed(() => props.page);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2); //.ceil -> aproxima al próximo número
  return currentPage.value < totalPages;
})

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, currentPage.value)
      .then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers["x-total-count"];
      })
      .catch((error) => {
        console.log(error);
      })
  })
}) 
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <RouterLink v-if="(currentPage != 1)" :to="{ name: 'event-list', query: { page: currentPage - 1 } }" rel="prev">
      Previous page
    </RouterLink>

    <RouterLink v-if="hasNextPage" :to="{ name: 'event-list', query: { page: (currentPage + 1) } }" rel="next">
      Next Page
    </RouterLink>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
