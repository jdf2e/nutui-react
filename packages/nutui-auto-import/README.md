# @nutui/nutui-react-auto-import

按需引入组件的样式文件。

支持情况参考 [https://unplugin.unjs.io/guide/](https://unplugin.unjs.io/guide/)

## 使用方式

vite

```js
import NutUIAutoImport from '@nutui/nutui-react-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    NutUIAutoImport({
      libraryName: '@nutui/nutui-react',
      style: 'css',
    }),
  ],
})
```
