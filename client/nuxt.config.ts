import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, // Enable SSR
  target: 'server', // Use server-side rendering
  devtools: {
    enabled: true, // Enable devtools
  },
  // Other configurations as needed
});

