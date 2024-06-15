<template>
    <v-footer class="bg-grey-lighten-1 d-flex flex-column">
        <v-container>
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