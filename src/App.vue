<template>
  <SpeedInsights />
  <v-app class="rounded rounded-md">
    <HeaderComponent />
    <v-main>
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
import { SpeedInsights } from '@vercel/speed-insights/vue';

</script>

<style scoped></style>
