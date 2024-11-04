## 功能说明

用于替换组件库内置的 Icon 库。

## 使用方法

### Taro 生态下

1. Taro 环境中需要在 config/index.js 文件中增加如下代码

```html
{ h5: { compile: { include: [path.resolve(__dirname, '../node_modules')], } },
mini: { compile: { include: [path.resolve(__dirname, '../node_modules')], } } }
```

2. 在 babel.config.js 文件中增加如下代码

```js
const { repleaceIcons } = require('@nutui/replace-icons')
{
  plugins: [
    [
      repleaceIcons({
        targetIconLibary: '@test/aa',
        iconMap: {
          Loading: Star,
        },
      }),
    ],
  ]
}
```

### H5 生态下

1. 需要将 nutui 组件库包含在编译中。

### 原始代码

```jsx
import { Loading } from '@nutui/icons-react'

export default () => {
  return <Loading />
}
```

### 替换后代码

```jsx
import { Star as Loading } from '@test/aa'

export default () => {
  return <Loading />
}
```
