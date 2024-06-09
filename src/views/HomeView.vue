<template>
    <div class="home">
        <HeroComponent />
        <IntroductionComponent />
        <TestimonialsComponent /> 
        <ServicesComponent />
        <AboutComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import IntroductionComponent from '../components/IntroductionComponent.vue';
import HeroComponent from '../components/HeroComponent.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        IntroductionComponent,
        TestimonialsComponent,
        ServicesComponent,
        AboutComponent,
        HeroComponent
    }
});
</script>