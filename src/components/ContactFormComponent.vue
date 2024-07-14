<template>
  <!-- validate-on="submit lazy" @submit.prevent="handleSubmit" -->
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="text-h5">Contact us</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field variant="outlined" required v-model="form.name" :rules="nameRules" validate-on="blur"
            label="Name"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field variant="outlined" required v-model="form.number" :counter="10" prefix="+91" :rules="phoneRules"
            validate-on="blur" label="Phone Number"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-textarea variant="outlined" required v-model="form.message" :counter="120" :rules="message"
            validate-on="blur" label="Message" maxlength="120" single-line></v-textarea>
        </v-col>
      </v-row>
      <v-btn :loading="loading" class="mt-2" type="submit" block>
        Submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

let valid = ref(false);
let loading = ref(false);

const form = reactive({
  name: '',
  number: '',
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


const phoneRules = [
  (value: string) => {
    if (value) return true;

    return 'Phone number is required.';
  },
  (value: string) => {
    if (/^[6-9]\d{9}$/.test(value)) return true;

    return 'Phone number must be a valid 10-digit Indian number starting with 6, 7, 8, or 9.';
  },
];

async function handleSubmit() {
  if (!valid.value) {
    return;
  }
  loading.value = true;

  try {
    alert('Form submitted successfully');

    // Reset form
    form.name = '';
    form.number = '';
    form.message = '';
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error submitting form');
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
