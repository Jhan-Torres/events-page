<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  case: {
    type: String,
    required: true
  }
})

const text = (props.case === 'normal') ? 'Back' : 'Home'

const linkTo = () => {
  (props.case === 'normal') ? router.back() : router.push({ name: 'event-list' })
};
</script>

<template>
  <button class="button" @click="linkTo()">
    <span class="text">Go {{ text }}</span>
    <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
      </path>
    </svg>
  </button>
</template>

<style scoped>
.button {
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  border: 3px solid rgb(255, 239, 94);
  background-color: rgb(255, 239, 94);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.137);
  margin-top: 1rem;
}

.text {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(27, 27, 27);
  color: white;
}

.arrow path {
  fill: rgb(19, 19, 19);
}

.button:hover .arrow {
  animation: slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  rotate: 180deg;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-8px);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.button:active {
  transform: scale(0.97);
}
</style>
