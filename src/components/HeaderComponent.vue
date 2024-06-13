<template>
    <header>
        <v-app-bar :elevation="0">
            <img src="../assets/vue.svg" alt="Logo" class="logo" />
            <v-app-bar-title>Sahi Tutorials</v-app-bar-title>
            <v-spacer></v-spacer>
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <a href="#home" @click.prevent="scrollTo('home')">Home</a>
                </li>
                <li class="navbar-item">
                    <a href="#about" @click.prevent="scrollTo('about')">About</a>
                </li>
                <li class="navbar-item">
                    <a href="#services" @click.prevent="scrollTo('services')">Services</a>
                </li>
                <li class="navbar-item">
                    <a href="#testimonials" @click.prevent="scrollTo('testimonials')">Testimonials</a>
                </li>
                <li class="navbar-item">
                    <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
                </li>
            </ul>
      <v-btn :prepend-icon="theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        slim @click="toggleTheme"></v-btn>
    </v-app-bar>
    </header>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme();
const tabs = ['Home','About', 'Services', 'Testimonials', 'Contact'];

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.logo {
    height: 40px;
    margin-right: 0.5rem;
}

.brand-name {
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.navbar-item {
    font-size: 1rem;
}

.navbar-item a {
    text-decoration: none;
    color: #333;
}

.navbar-item a:hover {
    text-decoration: underline;
}
</style>