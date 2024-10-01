import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import unoPreprocess from '@unocss/svelte-scoped/preprocess'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [vitePreprocess(), unoPreprocess()],
}
