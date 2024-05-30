<script setup>
import GoBackButton from '@/components/GoBackButton.vue';

const props = defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h2>The {{ resource }} you're looking for is not here.</h2>
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
  color: rgb(206, 66, 66);
  font-size: 5rem;
}

h2 {
  font-size: 2rem;
}
</style>
