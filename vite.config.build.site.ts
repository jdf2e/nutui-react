import { defineConfig } from 'vite'
import config from './package.json'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import path from 'path'
const resolve = path.resolve

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react/',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: [
            '> 0.5%',
            'last 2 versions',
            'ie > 11',
            'iOS >= 10',
            'Android >= 5',
          ],
        }),
      ],
    },
  },
  plugins: [reactRefresh(), mdPlugin({ mode: [Mode.HTML] })],
  build: {
    target: 'es2015',
    outDir: './dist/1x/',
    // assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        // doc: resolve(__dirname, 'demo.html'),
        mobile: resolve(__dirname, 'demo.html'),
      },
      output: {
        entryFileNames: `demo-${config.version}/[name].js`,
        chunkFileNames: `demo-${config.version}/[name].js`,
        assetFileNames: `demo-${config.version}/[name].[ext]`,
      },
    },
  },
})
