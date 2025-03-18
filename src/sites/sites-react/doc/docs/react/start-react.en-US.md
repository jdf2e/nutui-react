# Quick Start

## Intro

Through this article, you can master the installation and usage of NutUI React. The operation is simple and easy to get started, allowing for clean and fast development.

## Install

#### 1. Install via npm

```sh
# pnpm
pnpm add @nutui/nutui-react
# yarn
yarn add @nutui/nutui-react
# npm
npm install @nutui/nutui-react
```

## Component Usage

> NutUI React supports Tree Shaking by default, allowing for on-demand importing of component JS files without any plugin configuration. However, CSS style files cannot be included in this way, so from a styling perspective, there are two methods of usage:

#### Method 1: Regular Usage - Full Import of Styles

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

#### Method 2: Manual On-Demand Loading

You can manually import specific components.

```js
import '@nutui/nutui-react/dist/es/packages/button/style'
import Button from '@nutui/nutui-react/dist/es/packages/button'
```

It is important to note that when manually loading components on demand, you also need to import the global class file in your entry file to load some of NutUI React's global logic and styles:

```js
import '@nutui/nutui-react/dist/styles/themes/default.css'
```

#### Method 3: Automatic On-Demand Loading

If you find the above methods cumbersome, you can use Method 3, which provides automatic on-demand loading. However, when using automatic on-demand loading, you still need to import the global class file.

<details>
<summary>vite</summary>

Install the vite-plugin-imp plugin and configure it.

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
            return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style/css`
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

Install the babel-plugin-import plugin and configure it.

```sh
# pnpm
pnpm add babel-plugin-import -D
# yarn
yarn add babel-plugin-import -D
# npm
npm install babel-plugin-import -D
```

babel config：

:::demo

```js
{
  // ...
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react',
        style: 'css',
        camel2DashComponentName: false,
        customName: (name, file) => {
          return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}`
        },
      },
      'nutui-react',
    ],
  ]
}
```

:::

</details><br />

## Usage Notes

- NutUI-React is built on top of [react@^18.0.0](https://www.npmjs.com/package/react)
- The CSS units used in the components are px. If your project requires rem units, you can use some tools for conversion, such as [webpack](https://www.webpackjs.com/) with the [px2rem-loader](https://www.npmjs.com/package/px2rem-loader), or the [postcss](https://github.com/postcss/postcss) plugin [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem).

## Templates

The example code can be found in the [packages/templates](https://github.com/jdf2e/nutui-react/tree/next/packages/nutui-templates) directory.

<content-examples/>
