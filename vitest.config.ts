/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteConfig from './svelte.config'

export default getViteConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST,
      ...svelteConfig,
    }),
  ],
  test: {
    include: ['tests/{unit,integration}/*.test.{ts,js}'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      reportsDirectory: './tests/reports/coverage',
      reporter: ['html'],
    },
  },
})
