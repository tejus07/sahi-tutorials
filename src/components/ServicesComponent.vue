<template>
    <div class="services">
      <h2>Our Services</h2>
      <div class="service" v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  interface Service {
    id: number;
    title: string;
    description: string;
  }
  
  export default defineComponent({
    name: 'ServicesComponent',
    setup() {
      const services = reactive<Service[]>([
        {
          id: 1,
          title: 'Mathematics Tuition',
          description: 'Comprehensive mathematics tuition for students from class 1 to 12.',
        },
        {
          id: 2,
          title: 'Science Tuition',
          description: 'In-depth science lessons covering Physics, Chemistry, and Biology.',
        },
        {
          id: 3,
          title: 'English Tuition',
          description: 'Enhance your English language skills with our tailored lessons.',
        },
        {
          id: 4,
          title: 'Exam Preparation',
          description: 'Specialized coaching for board exams and competitive exams.',
        },
        {
          id: 5,
          title: 'Homework Assistance',
          description: 'Get help with your homework and assignments from experienced tutors.',
        },
      ]);
  
      return {
        services,
      };
    },
  });
  </script>
  
  <style scoped>
  .services {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .services h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .service {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
  }
  
  .service h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }
  
  .service p {
    margin: 0;
  }
  </style>
  