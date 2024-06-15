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

<script setup lang="ts">
import { ref } from 'vue';

const colors = ref([
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
]);

const slides = ref(['First', 'Second', 'Third', 'Fourth', 'Fifth']);
</script>

<style scoped>

</style>
