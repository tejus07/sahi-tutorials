<template>
  <div class="whatsapp-button" @click="contactOnWhatsApp">
    <v-icon color="white">mdi-whatsapp</v-icon>
  </div>
</template>

<script setup lang="ts">
const contactOnWhatsApp = () => {
  const whatsappNumber = '8699646885'; 
  const message = encodeURIComponent('Hello! I would like to contact you.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #25D366;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
