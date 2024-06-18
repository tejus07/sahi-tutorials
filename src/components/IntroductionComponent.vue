<template>
  <!-- <v-card class="introduction mx-auto">
    <v-card-title>Welcome to Sahi Tutorials</v-card-title>
    <v-card-item></v-card-item>
    <v-card-text> At Sahi Tutorials, we are dedicated to providing high-quality education to students from class 1 to
      12. With over
      20 years of experience, our mission is to help students achieve their academic goals and excel in their
      studies.</v-card-text>
    <v-card-text> Our teaching methods are personalized and effective, ensuring that each student receives the attention
      and support
      they need to succeed. Join us and experience the difference that our commitment to education can
      make.</v-card-text>
  </v-card> -->
  <v-container class="intro-text">
    <v-row class="d-flex align-items-center mx-auto">
      <h1 class="text-h4 font-weight-bold">
        A good <span class="text-blue">#education</span>
        is always a base of
        <br>
      </h1>
      <TypingAnimation class="text-h4 font-weight-bold" />
      <p class="text-h5 mt-5">
        Empowering you with the skills and knowledge to achieve your goals. Whether you're here to
        improve your career, learn a new skill, or seek personal development, we're here to help you
        every step of the way.
      </p>
      <v-btn class="text-none mb-4 explore-btn mt-7"
        size="x-large"
        variant="elevated"
        block 
       append-icon="mdi-home">Explore Opportunities</v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TypingAnimation from './TypingAnimation.vue';
</script>

<style scoped>
/* .introduction {
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
  } */
.intro-text {
  padding-top: 80px;
  padding-bottom: 80px;
}

.explore-btn {
  background: linear-gradient(105.69deg, #EAB308 0%, #EF4444 43.23%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06), 0px 16px 24px rgba(0, 0, 0, 0.08);
}

.intro-text h1 {
  line-height: 1.3076923077em;
  margin-bottom: 10px;
  font-family: Outfit, sans-serif !important;
}

.intro-text p {
  font-family: "Open Sans", sans-serif !important;
  max-width: 636px;
}

@media (max-width: 480px) {
  .intro-text h1 {
    font-size: 2.625rem !important;
  }
}
</style>