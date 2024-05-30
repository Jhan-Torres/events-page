<script setup>
import { inject } from "vue";
import { RouterLink, RouterView } from 'vue-router'


const GStore = inject("GStore");
</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="GStore?.flashMessage">
        {{ GStore.flashMessage }}
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>

</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

nav {
  padding: 20px;
  backdrop-filter: blur(30px);
  box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
  border-bottom: 2px solid rgba(255, 255, 225, 0.20);
  font-size: large;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  color: #42b983;
}

h2 {
  font-size: 1rem;
  color: chocolate;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
  font-size: 1.5rem;
  margin: 0 20px;
  font-weight: bold;
}
</style>
