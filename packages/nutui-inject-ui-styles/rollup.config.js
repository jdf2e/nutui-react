const path = require('path')
const ts = require('rollup-plugin-ts')

const cwd = __dirname

const base = {
  external: ['@tarojs/service'],
  plugins: [ts()],
}

// 供 CLI 编译时使用的 Taro 插件入口
const compileConfig = {
  input: path.join(cwd, 'src/index.ts'),
  output: {
    file: path.join(cwd, 'dist/index.js'),
    format: 'cjs',
    sourcemap: true,
  },
  ...base,
}

module.exports = [compileConfig]
