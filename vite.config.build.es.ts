import { defineConfig } from 'vite'
import path from 'path'
import config from './package.json'
import configPkg from './src/config.json'
import reactRefresh from '@vitejs/plugin-react-refresh'

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @jdf2e.
* Released under the MIT License.
*/`
let input: any = {}
configPkg.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element as any
    if (show || exportEmpty) {
      input[name] = `./src/packages/${name.toLowerCase()}/index.ts`
    }
  })
})
const resolve = path.resolve
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  plugins: [reactRefresh()],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input,
      // 请确保外部化那些你的库中不需要的依赖
      external: ['react', 'react-dom'],
      output: {
        banner,
        dir: path.resolve(__dirname, './dist/packages/_es'),
        entryFileNames: '[name].js',
      },
    },
    lib: {
      entry: '',
      name: 'index',
      formats: ['es'],
    },
  },
})
