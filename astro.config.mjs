import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The established production domain is the default canonical site.
const configuredSite = process.env.SITE_URL?.trim() || 'https://plazacolonarg.com';

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare({ imageService: 'passthrough' }),
  session: false,
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.includes('/404') })],
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@astrojs/cloudflare/entrypoints/server'],
    },
  },
});
