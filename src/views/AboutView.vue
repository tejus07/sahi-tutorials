<template>
    <div>
      <h1>About Us</h1>
      <AboutComponent />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AboutComponent from '../components/AboutComponent.vue';
  
  export default defineComponent({
    name: 'AboutView',
    components: {
      AboutComponent,
    },
  });
  </script>
  
  <style scoped>
  </style>
  