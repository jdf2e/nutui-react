import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  entries: [
    {
      input: 'src/index',
      outDir: 'dist',
      format: 'cjs',
      ext: 'cjs',
    },
  ],
  outDir: 'dist',
  externals: ['postcss', 'postcss-css-variables', 'postcss-scss'],
  rollup: {
    emitCJS: true,
  },
})
