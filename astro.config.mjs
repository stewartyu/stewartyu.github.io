// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stewartyu.com',
  redirects: {
    // The old site lived at /music/.
    '/music': '/',
  },
});
