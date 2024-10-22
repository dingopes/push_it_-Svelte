// vite.config.js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/your-repo-name/', // Replace 'your-repo-name' with your actual repository name
  plugins: [svelte()]
});
