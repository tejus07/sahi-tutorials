import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from "node:url";
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  base: './',
  resolve: {
    alias:{
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  }
})
