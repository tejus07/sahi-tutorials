<template>
    <div class="introduction">
      <h2>Welcome to Sahi Tutorials</h2>
      <p>
        At Sahi Tutorials, we are dedicated to providing high-quality education to students from class 1 to 12. With over 20 years of experience, our mission is to help students achieve their academic goals and excel in their studies.
      </p>
      <p>
        Our teaching methods are personalized and effective, ensuring that each student receives the attention and support they need to succeed. Join us and experience the difference that our commitment to education can make.
      </p>
      <router-link to="/about" class="learn-more">Learn More About Us</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'IntroductionComponent',
  });
  </script>
  
  <style scoped>
  .introduction {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center;
  }
  
  .introduction h2 {
    margin-bottom: 20px;
  }
  
  .introduction p {
    margin-bottom: 15px;
  }
  
  .learn-more {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .learn-more:hover {
    background-color: #0056b3;
  }
  </style>
  