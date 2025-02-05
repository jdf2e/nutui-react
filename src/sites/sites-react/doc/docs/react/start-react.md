# 快速上手

## 介绍

通过本文你可以掌握 NutUI React 的安装和使用方法，操作简单易上手，开发简洁快速。

## 安装

#### 1. 通过 NPM 安装

```sh
# pnpm
pnpm add @nutui/nutui-react
# yarn
yarn add @nutui/nutui-react
# npm
npm install @nutui/nutui-react
```

#### 2. 通过 CDN 安装及使用

> 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取到 NutUI。
> 不推荐在生产环境使用组件库 CDN，如果需要这种使用方式，建议将特定版本的 CDN 文件下载至本地项目目录中使用。

:::demo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入样式 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/style.css"
    />
    <!-- 引入React -->
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
    ></script>
    <!-- 引入NutUI组件库 -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/nutui.react.umd.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      // 在 #app 标签下渲染一个按钮组件
      ReactDOM.render(
        React.createElement(
          nutui.react.Button,
          null,
          React.createElement('div', null, '主要按钮')
        ),
        document.querySelector('#app')
      )
    </script>
  </body>
</html>
```

:::

## 组件使用

> NutUI React 默认支持 Tree Shaking，在无任何插件配置的情况下支持组件 JS 文件的按需引入。但 css 样式文件无法通过这种方式实现，因此从样式的角度可以分为以下两种使用方法：

#### 方法一、常规用法：全量引入样式

:::demo

```js
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '@nutui/nutui-react/dist/style.css'
import { Button } from '@nutui/nutui-react'

ReactDOM.render(
  <div className="App">
    <Button></Button>
  </div>,
  document.getElementById('app')
)
```

:::

#### 方法二、按需引入样式

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
            return `@nutui/nutui-react/dist/esm/${name}/style/css`
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        },
      ],
    }),
  ],
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
        libraryDirectory: 'dist/esm',
        style: 'css',
        camel2DashComponentName: false,
      },
      'nutui-react',
    ],
  ]
}
```

:::

</details><br/>

## 使用注意事项

- NutUI-React 基于 [react@^18.0.0](https://www.npmjs.com/package/react) 构建
- 组件 CSS 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等

## 示例

示例代码可以再 [packages/templates](https://github.com/jdf2e/nutui-react/tree/next/packages/nutui-templates) 下查看

<content-examples/>
