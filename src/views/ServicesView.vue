<template>
    <div class="services">
        <h1>Services</h1>
        <ServicesComponent />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ServicesComponent from '../components/ServicesComponent.vue';

export default defineComponent({
    name: 'ServicesView',
    components: {
        ServicesComponent
    },
});
</script>