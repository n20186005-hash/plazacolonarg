import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL once when the production domain is known. Leaving it empty keeps local builds valid.
const configuredSite = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare(),
  integrations: configuredSite ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@astrojs/cloudflare/entrypoints/server'],
    },
  },
});
