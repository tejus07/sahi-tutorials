<template>
    <div class="home">
        <section id="home">
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

<script lang="ts">
import { defineComponent } from 'vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import IntroductionComponent from '../components/IntroductionComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';
import ContactFormComponent from '../components/ContactFormComponent.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        IntroductionComponent,
        TestimonialsComponent,
        ServicesComponent,
        AboutComponent,
        HeroComponent,
        ContactFormComponent
    }
});
</script>