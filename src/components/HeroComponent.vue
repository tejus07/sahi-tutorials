<template>
    <!-- <div class="hero"> -->
      <!-- <div class="hero-content">
        <h1>Welcome to Sahi Tutorials</h1>
        <p>Providing high-quality education for over 20 years</p>
      </div> -->
    <!-- </div> -->
    <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
  name: 'HeroComponent',
  setup() {
    const colors = ref([
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ]);

    const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth']);

    return {
      colors,
      slides,
    };
  },
});
  </script>
  
  <style scoped>
  /* .hero {
    position: relative;
    height: 400px;
    background-image: url('@/assets/hero-background.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  .hero-content p {
    font-size: 1.2em;
    margin-bottom: 30px;
  }
  
  .cta-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #0056b3;
  }
    */
  </style>
  