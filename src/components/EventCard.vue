<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="event-card">
      <!-- Display event data -->
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(176, 202, 238);
  opacity: 0.9;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(121, 112, 112, 0.2);
  border: 1px solid black;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
