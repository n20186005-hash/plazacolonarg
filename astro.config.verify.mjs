import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Temporary config used only to validate prerendered HTML (incl. weather fallback)
// without invoking the Cloudflare adapter / Miniflare locally.
export default defineConfig({
  site: 'https://plazacolonarg.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
