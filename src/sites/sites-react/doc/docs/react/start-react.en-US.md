# Quick Start

## Intro

Through this article, you can master the installation and use of NutUI React. The operation is simple and easy to use, and the development is simple and fast.

## Install

#### 1. Install via NPM

```sh
#pnpm
pnpm add @nutui/nutui-react
#yarn
yarn add @nutui/nutui-react
# npm
npm install @nutui/nutui-react
```

#### 2. Manual On-Demand Loading

You can manually import individual components.

```js
import '@nutui/nutui-react/dist/es/packages/button/style'
import Button from '@nutui/nutui-react/dist/es/packages/button'
```

Note that when manually loading components on demand, you also need to import the global class file in the entry file to load some of NutUI React's global logic and styles:

```js
import '@nutui/nutui-react/dist/styles/themes/default.scss'
```

If you find the above method cumbersome, you can use the automatic on-demand loading provided by Method 3. However, when using automatic on-demand loading, you still need to import the global class file.

## Component usage

> NutUI React supports Tree Shaking by default, and supports on-demand import of component JS files without any plug-in configuration. However, css style files cannot be implemented in this way, so from the perspective of style, it can be divided into the following two usage methods:

#### Method 1, Conventional usage: Full import of styles

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

#### Method 2, import styles on demand

<details>
<summary>vite</summary>

Install the `vite-plugin-imp` plugin and configure it.

```sh
#pnpm
pnpm add vite-plugin-imp -D
#yarn
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

</details><br/>

<details>
<summary>webpack</summary>

Install the `babel-plugin-import` plugin and configure it.

```sh
#pnpm
pnpm add babel-plugin-import -D
#yarn
yarn add babel-plugin-import -D
# npm
npm install babel-plugin-import -D
```

Babel configuration:

:::demo

```js
{
  //...
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

</details><br/>

## Precautions for use

- NutUI-React is built on [react@^18.0.0](https://www.npmjs.com/package/react)
- The component CSS unit uses **px**, if you need **rem** unit in your project, you can convert it with some tools, such as [px2rem-loader](https://www.npmjs.com/package/px2rem-loader) of [webpack](https://www.webpackjs.com/), [postcss] of [postcss](https://github.com/postcss/postcss) -plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) plugin etc.

## Examples

Source code for all the examples can be found in the [packages/templates](https://github.com/jdf2e/nutui-react/tree/next/packages/nutui-templates) directory.

<content-examples/>
