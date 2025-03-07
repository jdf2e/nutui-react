# Quick Start

## Intro

Through this article, you can master the installation and use of NutUI-React Taro. The operation is simple and easy to use, and the development is simple and fast.

## Install Taro CLI

```sh
# pnpm
pnpm install -g @tarojs/cli
# npm
npm install -g @tarojs/cli
# yarn
yarn global add @tarojs/cli
```

## Method 1: Use the NutUI template to quickly create a project

#### 1. Use the command to create a Taro project:

```sh
taro init
```

#### 2、Refer to the operation below to select the NutUI React template

```sh
👽 Taro

Taro 即将创建一个新项目!
Need help? Go and open issue: https://tls.jd.com/taro-issue-helper

? 请输入项目名称！ MyProject
? 请输入项目介绍
? 请选择框架 React
? 是否需要使用 TypeScript ？ Yes
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择编译工具 Webpack5
? 请选择包管理工具 pnpm
? 请选择模板源 Github（最新）
✔ 拉取远程模板仓库成功！
  默认模板
  harmony
  mobx
  pwa
❯ react-NutUI（使用 NutUI React 的模板）
  react-native
  ......
```

## Method 2: Introduce NutUI React into the existing Taro project

#### 1. Install NutUI React

```sh
# pnpm
pnpm add @nutui/nutui-react-taro
# npm
npm i @nutui/nutui-react-taro
# yarn
yarn add @nutui/nutui-react-taro
```

#### 2、Taro

Install [@tarojs/plugin-html](https://taro-docs.jd.com/docs/use-h5/)

```sh
# pnpm
pnpm add @tarojs/plugin-html@version
# yarn
yarn add @tarojs/plugin-html@version
# npm
npm i @tarojs/plugin-html@version
```

config

:::demo

```js
// config/index.js
config = {
  plugins: ['@tarojs/plugin-html'],
  designWidth(input) {
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    return 750
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
}
```

:::

#### 3、Component usage and on-demand import

You can choose to import style files in full:

```js
import '@nutui/nutui-react-taro/dist/style.css'
```

You can also implement on-demand import of styles in the following ways:

Install `babel-plugin-import`.

```sh
# pnpm
pnpm add babel-plugin-import
# npm
npm i babel-plugin-import
# yarn
yarn add babel-plugin-import
```

babel config

:::demo

```js
// babel.config.js
plugins: [
  [
    'import',
    {
      libraryName: '@nutui/nutui-react-taro',
      libraryDirectory: 'dist/esm',
      style: 'css',
      camel2DashComponentName: false,
    },
    'nutui-react-taro',
  ],
]
```

:::

## Precautions

#### 1. Check if Taro is successfully installed

```sh
taro -v
```

The Taro version number appears to indicate a successful installation.

#### 2. Saas-related errors occurred during the installation of Taro

You may consider installing `mirror-config-china` and try again.

```sh
npm install -g mirror-config-china
```

#### 3. When the applet project is running, the error message "can't find the template" appears

Solution: Turn off prebundle and cache in Taro configuration file

:::demo

```js
// config/index.js
config = {
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['@nutui/nutui-react-taro', '@nutui/icons-react-taro'],
    },
  },
  cache: {
    enable: false,
  },
}
```

:::
