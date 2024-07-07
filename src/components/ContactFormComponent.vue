<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <h2>Contact us</h2>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field variant="outlined" v-model="form.name" :rules="nameRules" label="Name" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field variant="outlined" v-model="form.email" :rules="emailRules" label="E-mail"
            required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-textarea variant="outlined" v-model="form.message" :counter="120" :rules="message" label="Message" required
            maxlength="120" single-line></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const valid = ref(false);

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const nameRules = [
  (value: string) => {
    if (value) return true

    return 'Name is required.'
  },
  (value: string) => {
    if (value?.length <= 10) return true

    return 'Name must be less than 10 characters.'
  },
];

const message = [
  (value: string) => {
    if (value) return true

    return 'Message is required.'
  },
  (value: string) => {
    if (value?.length >= 1) return true

    return 'Message must be greater than 1 characters.'
  },
];


const emailRules = [
  (value: string) => {
    if (value) return true

    return 'E-mail is requred.'
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  },
]

const handleSubmit = () => {
  alert('Form submitted!'); // Replace with actual form submission logic
  console.log('Form data:', form);
  // Reset form
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
</script>

<style scoped></style>
