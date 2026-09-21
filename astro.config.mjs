// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://systemdelectrical.com',
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: [],
    },
    {
      name: 'Noto Sans Thai',
      cssVariable: '--font-noto-sans-thai',
      provider: fontProviders.google(),
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['thai'],
      fallbacks: ['sans-serif'],
    },
  ],
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'th',
        locales: {
          th: 'th-TH',
        },
      },
    }),
  ],
});
