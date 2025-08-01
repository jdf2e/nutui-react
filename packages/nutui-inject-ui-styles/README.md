# @nutui/inject-ui-styles

## 功能说明

用于支持不同组件库引入 nutui 的样式文件，尤其是对于鸿蒙和 React Native 平台。

## 使用方法

1. 在 babel.config.js 文件中增加如下代码

```js
const injectUIStyles = require('@nutui/inject-ui-styles')

{
  [
    [injectUIStyles({})]
  ]
}
```

2. 在 config/index.js 文件中增加如下内容( 废弃 )

```js
const {viteComponentStyle} = require('@nutui/inject-ui-styles')

{
  harmony: {
    // 将编译方式设置为使用 Vite 编译
    compiler: {
      type: 'vite',
      vitePlugins: [
        viteComponentStyle({cName: '@nutui/nutui-react-taro', pName:'@xxx/ui'})
      ]
    }
  }
}
```
