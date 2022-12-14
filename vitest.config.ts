/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default getViteConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
  },
})
