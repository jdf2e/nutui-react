import { readFileSync } from 'node:fs'
import { defineConfig } from 'tsup'

const { version } = JSON.parse(readFileSync('package.json', 'utf-8'))

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  target: 'node18.12',
  splitting: false,
  dts: false,
  clean: true,
  // 把运行时依赖打进产物，使 dist/cli.js 自包含、零安装依赖即可运行。
  noExternal: ['yargs', '@modelcontextprotocol/sdk'],
  banner: {
    // MCP SDK 内部用到 CJS require，ESM 产物需补 createRequire。
    js: [
      '#!/usr/bin/env node',
      'import { createRequire } from "node:module";',
      'const require = createRequire(import.meta.url);',
    ].join('\n'),
  },
  define: {
    __CLI_VERSION__: JSON.stringify(version),
  },
})
