import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  target: 'node18.12',
  splitting: false,
  dts: false,
  clean: true,
  // 把运行时依赖打进产物，使 dist/cli.js 自包含、零安装依赖即可运行。
  noExternal: ['yargs'],
  banner: {
    js: '#!/usr/bin/env node',
  },
})
