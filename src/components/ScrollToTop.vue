<template>
  <v-btn
    v-show="visible"
    icon="mdi-arrow-up"
    class="scroll-to-top"
    @click="scrollToTop"
  >
  </v-btn>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useGoTo } from 'vuetify';

const visible = ref(false);
const goTo = useGoTo();

const handleScroll = () => {
  visible.value = window.scrollY > 200;
};

const scrollToTop = () => {
  goTo(0, { duration: 500 });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #1976D2;
  color: white;
}
</style>
