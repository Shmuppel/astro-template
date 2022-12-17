import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({
    scss: {
      prependData: `
      @use 'sass:color';
      @import 'src/styles/variables.scss';
      `,
    },
    typescript: true,
  }),
}

export default config
