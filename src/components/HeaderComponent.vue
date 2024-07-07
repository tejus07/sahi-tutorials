<template>
    <header>
        <v-app-bar :elevation="0">
            <div class="logo d-flex align-center justify-center pl-2">
                <img src="@/assets/learningexpress-without-bg.png" alt="Sahi Tutorials Logo" width="50"></img>
            </div>
            <!-- <img src="../assets/vue.svg" alt="Logo" class="logo" /> -->
            <v-app-bar-title class="ml-3 font-weight-bold" tag="div">Sahi Tutorials</v-app-bar-title>
            <!-- <v-spacer></v-spacer> -->
            <v-list v-if="!isMobile" class="d-flex align-center">
                <v-list-item v-for="(item, index) in items" :key="index"
                    @click.prevent="handleItemClick(item.section)">
                    <v-icon :class="[getIcon(item.title),'mdi']" size="small"></v-icon>
                    <span>{{ item.title }}</span>
                </v-list-item>
            </v-list>
            <v-btn v-if="!isMobile" slim @click="toggleTheme">
                <v-icon
                    :class="theme.global.current.value.dark ? 'mdi mdi-weather-night' : ' mdi mdi-weather-sunny'"></v-icon>
            </v-btn>
            <v-btn class="text-none" variant="outlined">contact us</v-btn>
            <v-app-bar-nav-icon v-if="isMobile" @click.stop="toggleDrawer"></v-app-bar-nav-icon>

        </v-app-bar>
        <v-navigation-drawer width="300" v-model="drawer" app v-if="isMobile">
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
import { computed, onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify'

const theme = useTheme();
const drawer = ref(false);
const items = [
    { title: 'Home', section: 'home' },
    { title: 'About', section: 'about' },
    { title: 'Services', section: 'services' },
    { title: 'Testimonials', section: 'testimonials' },
    { title: 'Contact', section: 'contact' },
];

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

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

const { xs, smAndDown } = useDisplay();
const isMobile = computed(() => xs.value || smAndDown.value);

onMounted(() => {
    console.log(drawer);
  console.log(isMobile.value);
});

</script>

<style scoped>
.logo{
    transform: scale(1.4);
}
</style>