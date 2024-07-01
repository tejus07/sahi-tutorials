<template>
    <div class="home">
        <section id="home" class="section">
            <!-- <v-parallax :src="blurryGradient"> -->
            <!-- </v-parallax> -->
            <IntroductionComponent />
            <HeroComponent />
        </section>
        <section id="about" class="section">
            <AboutComponent />
        </section>
        <section id="services" class="section">
            <ServicesComponent />
        </section>
        <section id="testimonials" class="section">
            <TestimonialsComponent />
        </section>
        <section id="contact" class="section">
            <ContactFormComponent />
        </section>

    </div>
</template>

<script setup lang="ts">
import TestimonialsComponent from '../components/TestimonialsComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import IntroductionComponent from '../components/IntroductionComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';
import ContactFormComponent from '../components/ContactFormComponent.vue';
// import TypingAnimation from '../components/TypingAnimation.vue';
// import blurryGradient from '@/assets/blurry-gradient.svg';

</script>

<style scoped>
.section {
  scroll-margin-top: 60px;
}</style>