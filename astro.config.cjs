import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import svelteConfig from './svelte.config'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(svelteConfig), compress()],
})
