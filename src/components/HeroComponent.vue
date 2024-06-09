<template>
    <div class="hero">
      <div class="hero-content">
        <h1>Welcome to Sahi Tutorials</h1>
        <p>Providing high-quality education for over 20 years</p>
        <router-link to="/about" class="cta-button">Learn More</router-link>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HeroComponent',
  });
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    height: 400px;
    /* background-image: url('@/assets/hero-background.jpg'); */
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
  </style>
  