<template>
  <HeaderComponent/>
  <router-view/> 
  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import TestimonialsComponent from './components/TestimonialsComponent.vue';

</script>

<style scoped>

</style>
