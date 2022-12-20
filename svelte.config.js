import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({
    scss: {
      prependData: `
      @use 'sass:color';
      @import 'src/styles/variables.scss';
      `,
    },
    less: true,
    sass: { renderSync: true },
    stylus: true,
    typescript: true,
  }),
}

export default config
