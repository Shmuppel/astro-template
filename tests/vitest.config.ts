/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default getViteConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    include: ['tests/**/*.{test}.{ts}'],
    globals: true,
    environment: 'jsdom',
  },
})
