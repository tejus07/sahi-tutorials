<template>
    <div class="testimonials">
        <h1>Testimonials</h1>
        <TestimonialsComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue';

export default defineComponent({
  name: 'TestimonialsView',
  components: {
    TestimonialsComponent,
  },
});
</script>