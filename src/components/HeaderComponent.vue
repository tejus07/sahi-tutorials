<template>
    <header>
        <nav class="navbar">
            <div class="navbar-brand">
                <img src="../assets/vue.svg" alt="Logo" class="logo" />
                <span class="brand-name">Sahi Tutorials</span>
            </div>
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="navbar-item">
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li class="navbar-item">
                    <RouterLink to="/services">Services</RouterLink>
                </li>
                <li class="navbar-item">
                    <RouterLink to="/testimonials">Testimonials</RouterLink>
                </li>
                <li class="navbar-item">
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}

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