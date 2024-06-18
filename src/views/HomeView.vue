<template>
    <div class="home">
        <section id="home">
            <!-- <v-parallax :src="blurryGradient"> -->
            <!-- </v-parallax> -->
            <IntroductionComponent />
            <HeroComponent />
        </section>
        <section id="about">
            <AboutComponent />
        </section>
        <section id="services">
            <ServicesComponent />
        </section>
        <section id="testimonials">
            <TestimonialsComponent />
        </section>
        <section id="contact">
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

<style scoped></style>