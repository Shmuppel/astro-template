/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default getViteConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
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
