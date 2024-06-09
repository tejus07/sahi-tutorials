import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue' 
import About from './views/About.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
import Testimonials from './views/Testimonials.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/testimonials',
            name: 'Testimonials',
            component: Testimonials
        }
    
    ]
});

createApp(App)
.use(router)
.mount('#app')
