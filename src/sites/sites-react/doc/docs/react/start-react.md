# 快速上手

## 介绍

通过本文你可以掌握 NutUI React 的安装和使用方法，操作简单易上手，开发简洁快速。

## 安装

#### 1. 安装

```sh
# pnpm
pnpm add @nutui/nutui-react
# yarn
yarn add @nutui/nutui-react
# npm
npm install @nutui/nutui-react
```

## 组件使用

> NutUI React 默认支持 Tree Shaking，在无任何插件配置的情况下支持组件 JS 文件的按需引入。但 css 样式文件无法通过这种方式实现，因此从样式的角度可以分为以下两种使用方法：

#### 方法一、常规用法：全量引入样式

:::demo

```js
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// JRKF 默认
import '@nutui/nutui-react/dist/style.css'
// JMAPP 主题
// import '@nutui/nutui-react/dist/style-jmapp.css'
// JRKF 主题
// import '@nutui/nutui-react/dist/style-jrkf.css'
import { Button } from '@nutui/nutui-react'

ReactDOM.render(
  <div className="App">
    <Button></Button>
  </div>,
  document.getElementById('app')
)
```

:::

#### 方法二、手动按需加载

可以手动引入部分组件。

```js
import '@nutui/nutui-react/dist/es/packages/button/style'
import Button from '@nutui/nutui-react/dist/es/packages/button'
```

需要注意的是，`在手动按需加载时，你还需要在入口文件中引入 global 类的文件来加载一些 NutUI React 的全局性逻辑和样式：`。css 和 scss 主题文件路径，根据您实际项目采用的技术栈进行选择。

```js
// css 主题文件路径
// 默认主题
import '@nutui/nutui-react/dist/styles/themes/default.css'
// 默认暗黑主题
import '@nutui/nutui-react/dist/styles/themes/default-dark.css'
// JMAPP 主题
import '@nutui/nutui-react/dist/styles/themes/jmapp.css'
// JRKF 主题
import '@nutui/nutui-react/dist/styles/themes/jrkf.css'

// scss 主题文件路径
// 默认主题
import '@nutui/nutui-react/dist/styles/theme-default.scss'
// 默认暗黑主题
import '@nutui/nutui-react/dist/styles/theme-dark.scss'
// JMAPP 主题
import '@nutui/nutui-react/dist/styles/theme-jmapp.scss'
// JRKF 主题
import '@nutui/nutui-react/dist/styles/theme-jrkf.scss'
```

#### 方法三、自动的按需加载

如果你认为上面的写法比较繁琐，你可以使用方法三提供的自动按需加载，**但是使用自动按需加载时扔需引入 global 类的文件**。

<details>
<summary>vite</summary>

安装 `vite-plugin-imp` 插件并配置。

```sh
# pnpm
pnpm add vite-plugin-imp -D
# yarn
yarn add vite-plugin-imp -D
# npm
npm install vite-plugin-imp -D
```

入口文件需要引入全局样式

:::demo

```js
// app.js

// css 主题文件路径
// 默认主题
import '@nutui/nutui-react/dist/styles/themes/default.css'
// 默认暗黑主题
// import '@nutui/nutui-react/dist/styles/themes/default-dark.css'
// JMAPP 主题
// import '@nutui/nutui-react/dist/styles/themes/jmapp.css'
// JRKF 主题
// import '@nutui/nutui-react/dist/styles/themes/jrkf.css'

// scss 主题文件路径
// 默认主题
// import '@nutui/nutui-react/dist/styles/theme-default.scss'
// 默认暗黑主题
// import '@nutui/nutui-react/dist/styles/theme-dark.scss'
// JMAPP 主题
// import '@nutui/nutui-react/dist/styles/theme-jmapp.scss'
// JRKF 主题
// import '@nutui/nutui-react/dist/styles/theme-jrkf.scss'
```

:::

:::demo

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@nutui/nutui-react',
          style: (name) => {
            // 默认主题
            // 按需引入 css 文件的处理，两种方式择其一
            return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style/css`
            // 按需引入 scss 文件的处理，两种方式择其一
            return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style`

            // JMAPP 主题
            // 按需引入 css 文件的处理，两种方式择其一
            // return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jmapp/css`
            // 按需引入 scss 文件的处理，两种方式择其一
            // return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jmapp`

            // JRKF 主题
            // 按需引入 css 文件的处理，两种方式择其一
            // return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jrkf/css`
            // 按需引入 scss 文件的处理，两种方式择其一
            // return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jrkf`
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        },
      ],
    }),
  ],
  // 项目中采用 scss 预处理样式文件，需要添加如下配置
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 或 "modern"，"legacy"
        additionalData: `@import '@nutui/nutui-react/dist/styles/variables.scss';`,
        // JMAPP 主题
        // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jmapp.scss';`
        // JRKF 主题
        // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jrkf.scss';`
      },
    },
  },
})
```

:::

</details><br />

<details>
<summary>webpack</summary>

安装 `babel-plugin-import` 插件并配置。

```sh
# pnpm
pnpm add babel-plugin-import -D
# yarn
yarn add babel-plugin-import -D
# npm
npm install babel-plugin-import -D
```

入口文件需要引入全局样式

:::demo

```js
// app.js

// css 主题文件路径
// 默认主题
import '@nutui/nutui-react/dist/styles/themes/default.css'
// 默认暗黑主题
// import '@nutui/nutui-react/dist/styles/themes/default-dark.css'
// JMAPP 主题
// import '@nutui/nutui-react/dist/styles/themes/jmapp.css'
// JRKF 主题
// import '@nutui/nutui-react/dist/styles/themes/jrkf.css'

// scss 主题文件路径
// 默认主题
// import '@nutui/nutui-react/dist/styles/theme-default.scss'
// 默认暗黑主题
// import '@nutui/nutui-react/dist/styles/theme-dark.scss'
// JMAPP 主题
// import '@nutui/nutui-react/dist/styles/theme-jmapp.scss'
// JRKF 主题
// import '@nutui/nutui-react/dist/styles/theme-jrkf.scss'
```

:::

webpack 配置：

:::demo

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import '@nutui/nutui-react/dist/styles/variables.scss';`,
              // JMAPP 主题
              // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jmapp.scss';`
              // JRKF 主题
              // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jrkf.scss';`
            },
          },
        ],
      },
    ],
  },
}
```

:::

babel 配置：

:::demo

```js
{
  // ...
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react',
        camel2DashComponentName: false,
        customName: (name, file) => {
          return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}`
        },
        // 默认主题
        // 自动加载 scss 样式文件
        customStyleName: (name) =>
          `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style`,
        // 自动加载 css 样式文件
        // customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style/css`

        // JMAPP 主题
        // 自动加载 scss 样式文件
        // customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jmapp`,
        // 自动加载 css 样式文件
        // customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jmapp/css`

        // jrkf 端主题
        // 自动加载 scss 样式文件
        // customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jrkf`,
        // 自动加载 css 样式文件
        // customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style-jrkf/css`
      },
      'nutui-react',
    ],
  ]
}
```

:::

</details><br />

## 使用注意事项

- NutUI-React 基于 [react@^18.0.0](https://www.npmjs.com/package/react) 构建
- 组件 CSS 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等。需要注意的是，在转化 **rem** 时，对 **NutUI** 相关的样式设置在黑名单里，如：

```
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      propList: ['*'],
      selectorBlackList: ['nut-'] // 忽略类名
    }
  }
}
```

## 示例

示例代码可以再 [packages/templates](https://github.com/jdf2e/nutui-react/tree/feat_v3.x/packages/nutui-templates) 下查看

<content-examples/>
