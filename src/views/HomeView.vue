<template>
    <div class="home">
        <section id="home">
            <v-parallax src="/blurry-gradient.svg">
                <div class="d-flex flex-column justify-center align-center">
                    <h1 class="text-h4 font-weight-thin mb-4">
                        A good #education is always a base of
                        <br>
                        <TypingAnimation/>
                    </h1>
                    <p class="text-center">
                        Empowering you with the skills and knowledge to achieve your goals. Whether you're here to
                        improve your career, learn a new skill, or seek personal development, we're here to help you
                        every step of the way.
                    </p>
                </div>
            </v-parallax>
            <HeroComponent />
            <IntroductionComponent />
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
import TypingAnimation from '../components/TypingAnimation.vue';
</script>
<style>
#home{
   
}
</style>