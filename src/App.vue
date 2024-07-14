<template>
  <v-app class="rounded rounded-md">
    <HeaderComponent />
    <v-main>
      <HomeView />
    </v-main>
    <ScrollToTop />
    <WhatsAppButton />
    <FooterComponent />
  </v-app>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
import HomeView from './views/HomeView.vue';
</script>

<style scoped></style>
