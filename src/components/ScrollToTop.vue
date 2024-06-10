<template>
    <button v-if="visible" class="scroll-to-top" @click="scrollToTop">
      ⬆️ Top
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const visible = ref(false);
  
  const checkScroll = () => {
    visible.value = window.scrollY > 200;
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', checkScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
  });
  </script>
  
  <style scoped>
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .scroll-to-top:hover {
    background-color: #555;
  }
  </style>
  