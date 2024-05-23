<script setup>
import GoBackButton from '@/components/GoBackButton.vue';
</script>

<template>
  <div class="not-found">
    <h1>Page not found</h1>
    <GoBackButton :case="'notFound'" />
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: red
}
</style>
