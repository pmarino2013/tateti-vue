<script setup>
import TatetiApp from "./components/TatetiApp.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <TatetiApp />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
