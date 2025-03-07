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

#### 2. Install and use via CDN

> NutUI is available on public CDNs like **jsdelivr** and **unpkg**.
> It is not recommended to use the component library CDN in the production environment. If this method is required, it is recommended to download the specific version of the CDN file to the local project directory for use.

:::demo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- import style -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/style.css"
    />
    <!-- import React -->
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"
    ></script>
    <!-- Import NutUI component library -->
    <script src="https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/nutui.react.umd.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      // Render a button component under the #app tag
      ReactDOM.render(
        React.createElement(
          nutui.react.Button,
          null,
          React.createElement('div', null, 'Primary button')
        ),
        document.querySelector('#app')
      )
    </script>
  </body>
</html>
```

:::

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

## Precautions for use

- NutUI-React is built on [react@^18.0.0](https://www.npmjs.com/package/react)
- The component CSS unit uses **px**, if you need **rem** unit in your project, you can convert it with some tools, such as [px2rem-loader](https://www.npmjs.com/package/px2rem-loader) of [webpack](https://www.webpackjs.com/), [postcss] of [postcss](https://github.com/postcss/postcss) -plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) plugin etc.

## Examples

Source code for all the examples can be found in the [packages/templates](https://github.com/jdf2e/nutui-react/tree/next/packages/nutui-templates) directory.

<content-examples/>
