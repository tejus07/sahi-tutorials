import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import TestimonialsView from '../views/TestimonialsView.vue';
import ServicesView from '../views/ServicesView.vue';
const routes =  [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/testimonials', name: 'Testimonials', component: TestimonialsView },
    { path: '/services', name: 'Services', component: ServicesView },
  ];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;