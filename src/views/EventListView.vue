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

    <div class="pagination">
      <RouterLink id="page-prev" v-if="currentPage != 1" :to="{ name: 'event-list', query: { page: currentPage - 1 } }"
        rel="prev">
        &#60; Previous
      </RouterLink>

      <RouterLink id="page-next" v-if="hasNextPage" :to="{ name: 'event-list', query: { page: (currentPage + 1) } }"
        rel="next">
        &#62; Next
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
