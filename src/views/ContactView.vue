<template>
    <div class="contact">
        <h1>Contact</h1>
        <ContactFormComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContactFormComponent from '../components/ContactFormComponent.vue';

export default defineComponent({
  name: 'ContactView',
  components: {
    ContactFormComponent,
  },
});
</script>

<style scoped></style>