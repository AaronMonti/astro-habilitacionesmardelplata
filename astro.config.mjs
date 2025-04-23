// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Habilitar modo servidor
  output: 'server',

  experimental: {
    session: true
  },

  vite: {
      plugins: [tailwindcss()]
  },

  server: {
      proxy: {
          '/api': {
              target: 'http://localhost:8000',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
          }
      }
  },

  adapter: cloudflare()
});