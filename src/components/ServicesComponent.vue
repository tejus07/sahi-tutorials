<template>
  <v-row>
    <v-col class="d-flex flex-column flex-wrap">
      <img class="mb-5 " src="../assets/zigzag-line.svg"/>
      <div class="mx-5">
        <div class="text-h6">Better Learning. Better Results</div>
        <div class="text-h4">Our Services</div>
      </div>    
    </v-col>
  </v-row>
  <v-row class="mt-0 mb-10">
    <v-col md="6" class="py-0">

      <v-card variant="outlined" v-for="service in services" :key="service.id" append-icon="mdi-book" class="ma-5"
        :prepend-icon="service.icon" :title="service.title">
        <template v-slot:prepend>
          <v-avatar color="#2196F3">
            <v-icon :icon="service.icon"></v-icon>
          </v-avatar>
        </template>
        <v-card-text>
          {{ service.description }}</v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services = reactive<Service[]>([
  {
    id: 1,
    icon: 'mdi-math-compass',
    title: 'Mathematics Tuition',
    description: 'Comprehensive mathematics tuition for students from class 1 to 12.',
  },
  {
    id: 2,
    icon: 'mdi-book-education-outline',
    title: 'Science Tuition',
    description: 'In-depth science lessons covering Physics, Chemistry, and Biology.',
  },
  {
    id: 3,
    icon: 'mdi-alphabetical-variant',
    title: 'English Tuition',
    description: 'Enhance your English language skills with our tailored lessons.',
  },
  {
    id: 4,
    icon: 'mdi-presentation',
    title: 'Exam Preparation',
    description: 'Specialized coaching for board exams and competitive exams.',
  },
  {
    id: 5,
    icon: 'mdi-home-analytics',
    title: 'Homework Assistance',
    description: 'Get help with your homework and assignments from experienced tutors.',
  },
]);

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