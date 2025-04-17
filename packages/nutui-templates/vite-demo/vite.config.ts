import { defineConfig } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@nutui/nutui-react',
          style: (name) => {
            return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style/index`
            // return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jmapp/index`
            // return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jmapp/index`
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 或 "modern"，"legacy"
        additionalData: `@import '@nutui/nutui-react/dist/styles/variables.scss';`
        // jmapp 需要在 app 入口引入 import '@nutui/nutui-react/dist/styles/themes/jmapp.css'
        // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jmapp.scss';`
      }
    }
  },
})
