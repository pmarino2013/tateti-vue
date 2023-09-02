<script setup>
import TatetiApp from "./components/TatetiApp.vue";
</script>

<template>
  <div class="bg-dark body d-flex align-items-center">
    <div class="container">
      <div class="row pt-2">
        <div class="col text-white text-center">
          <h1>
            <span class="text-success">Ta</span>-<span class="text-danger"
              >Te</span
            >-<span class="text-warning">Ti</span>
          </h1>
        </div>
      </div>
      <div class="row pb-3">
        <div class="col-12 col-md-10 offset-md-1">
          <TatetiApp />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap");
.body {
  min-height: 100vh;
}
h1 {
  font-family: "Rubik Iso", cursive;
  font-size: 5rem;
}
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
