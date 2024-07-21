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
       append-icon="mdi-chevron-down">Explore Opportunities</v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TypingAnimation from './TypingAnimation.vue';
</script>

<style scoped>
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
}

.intro-text p {
  max-width: 636px;
}

@media (max-width: 480px) {
  .intro-text h1 {
    font-size: 2.625rem !important;
  }
}
</style>