<template>
  <v-app class="rounded rounded-md">
    <HeaderComponent />
    <v-main class="d-flex align-center justify-center">
      <HomeView />
    </v-main>
    <ScrollToTop />
    <FooterComponent />
  </v-app>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import HomeView from './views/HomeView.vue';

</script>

<style scoped></style>
