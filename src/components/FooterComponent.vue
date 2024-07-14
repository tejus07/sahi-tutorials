<template>
    <v-footer class="d-flex flex-column">
        <v-container class="pa-2">
            <v-row>
                <v-col cols="12" md="6">
                    <h2>Sahi Tutorials</h2>
                    <p>
                        Providing quality education for over 20 years. Helping students from
                        class 1 to 12 achieve their academic goals.
                    </p>
                </v-col>
                <v-col cols="12" md="6">
                    <h3>Contact Us</h3>
                    <p>Email: contact@tuitionexample.com</p>
                    <p>Phone: +1 (234) 567-8901</p>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.362972467013!2d75.40890555651912!3d31.376553700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a496d9c945461%3A0x269149abaffd309b!2sSAHI%20TUTORIALS!5e0!3m2!1sen!2sin!4v1720972610530!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style="border:0;"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <p class="sq-mt-0 text-center text-sm text-gray-400"> © {{ currentYear }} Sahi Tutorials. All rights
                        reserved. </p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterComponent',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
});
</script>

<style scoped>
</style>