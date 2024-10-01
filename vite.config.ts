import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import uno from '@unocss/svelte-scoped/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uno(),
    svelte(),
  ],
})
