<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <!-- <header> -->
  <!--   <nav> -->
  <!--     <RouterLink to="/">Home</RouterLink> -->
  <!--     <RouterLink to="/flags">Flags</RouterLink> -->
  <!--   </nav> -->
  <!-- </header> -->

  <main>
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
}

nav {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  height: 100%;
  line-height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

main {
  width: 100vw;
  height: calc(100vh - 3rem);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
