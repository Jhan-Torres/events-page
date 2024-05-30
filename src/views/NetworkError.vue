<template>
  <div class="networkError">
    <h1>Uh-oh!</h1>

    <h2>
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again.
    </h2>
  </div>
</template>

<style scoped>
.networkError {
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