<template>
  <div class="testimonials">
    <h2>Testimonials</h2>
    <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
      <p class="message">{{ testimonial.message }}</p>
      <p class="author">- {{ testimonial.author }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Testimonial {
  id: number;
  message: string;
  author: string;
}

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    message: 'This tuition has helped me excel in my studies. The teachers are very supportive and knowledgeable.',
    author: 'Student A'
  },
  {
    id: 2,
    message: 'I am very satisfied with the progress my child has made here. Highly recommend this tuition.',
    author: 'Parent B'
  },
  {
    id: 3,
    message: 'The best place for academic improvement. The teaching methods are excellent.',
    author: 'Student C'
  },
]);
</script>

<style scoped>
.testimonials {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.testimonials h2 {
  text-align: center;
  margin-bottom: 20px;
}

.testimonial {
  margin-bottom: 20px;
}

.testimonial .message {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.testimonial .author {
  font-size: 1em;
  font-style: italic;
  text-align: right;
}
</style>