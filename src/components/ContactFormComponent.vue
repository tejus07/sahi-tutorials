<template>
  <!-- validate-on="submit lazy" @submit.prevent="handleSubmit" -->
  <v-form v-model="valid" >
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
      <v-btn :loading="loading" class="mt-2" type="submit" block @click.prevent="handleSubmit">
        Submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, reactive } from 'vue';

let valid = ref(false);
let loading = ref(false);

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

async function handleSubmit() {
  loading.value = true;

  const url = 'https://script.google.com/macros/s/AKfycbytgRCVfJ_nEGMN40-UcimaVm6BP_E0s2EIf1eX28FC9T27Kl_Q8DiulQy0m1ncsf86cg/exec';
  const data = {
    name: form.name,
    email: form.email,
    message: form.message
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.result === 'success') {
      alert('Form submitted successfully');
      console.log('Form data:', form);

      // Reset form
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error submitting form');
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
