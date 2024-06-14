<template>
    <header>
        <v-app-bar :elevation="0">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- <img src="../assets/vue.svg" alt="Logo" class="logo" /> -->
            <v-app-bar-title>Sahi Tutorials</v-app-bar-title>
            <!-- <v-spacer></v-spacer> -->
            <!-- <ul class="navbar-menu">
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
            </ul> -->
            <v-btn :prepend-icon="theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'" slim
                @click="toggleTheme"></v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :prepend-icon="getIcon(item.title)"
                    @click.prevent="handleItemClick(item.section)" :title="item.title">
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { ref } from 'vue';

const theme = useTheme();
const drawer = ref(false);
const items = [
    { title: 'Home', section: 'home' },
    { title: 'About', section: 'about' },
    { title: 'Services', section: 'services' },
    { title: 'Testimonials', section: 'testimonials' },
    { title: 'Contact', section: 'contact' },
];
// const tabs = ['Home','About', 'Services', 'Testimonials', 'Contact'];

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleItemClick = (section: string) => {
    drawer.value = false;
    scrollTo(section);
};

const getIcon = (title: string) => {
    const iconMap: { [key: string]: string } = {
        Home: 'mdi-home',
        About: 'mdi-information',
        Services: 'mdi-briefcase',
        Testimonials: 'mdi-comment-account',
        Contact: 'mdi-email',
    };
    return iconMap[title] || 'mdi-help-circle';
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