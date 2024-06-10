<template>
  <HeaderComponent/>
  <main>
    <HomeView/>
  </main>
  <ScrollToTop />
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import HomeView from './views/HomeView.vue';

</script>

<style scoped>

</style>
