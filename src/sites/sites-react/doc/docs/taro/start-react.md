# 快速上手

## 介绍

通过本文你可以掌握 NutUI-React Taro 的安装和使用方法，操作简单易上手，开发简洁快速。

## 安装 Taro 脚手架

```sh
# pnpm
pnpm install -g @tarojs/cli
# npm
npm install -g @tarojs/cli
# yarn
yarn global add @tarojs/cli
```

## 方式一：使用 Taro 内置的 NutUI 模板快速创建项目

#### 1、使用命令创建 Taro 项目：

```sh
taro init
```

#### 2、参考下方操作，选择 NutUI React 模板

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

## 方式二：在已有 Taro 项目中引入 NutUI React

#### 1、安装 NutUI React

```sh
# pnpm
pnpm add @nutui/nutui-react-taro
# npm
npm i @nutui/nutui-react-taro
# yarn
yarn add @nutui/nutui-react-taro
```

#### 2、Taro 相关配置

安装 [@tarojs/plugin-html](https://taro-docs.jd.com/docs/use-h5/)

> 注意，这里安装的版本 version 必须与项目中 Taro 版本保持一致！

```bash
# pnpm
pnpm add @tarojs/plugin-html@version
# yarn
yarn add @tarojs/plugin-html@version
# npm
npm i @tarojs/plugin-html@version
```

在项目中配置

:::demo

```js
// config/index.js
config = {
  // 开启 HTML 插件
  plugins: ['@tarojs/plugin-html'],
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    // 全局使用 Taro 默认的 750 尺寸
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

#### 3、组件使用与按需引入

您可以选择全量引入样式文件：

```js
// 默认主题
import '@nutui/nutui-react-taro/dist/style.css'
// 默认主题暗黑模式
// import '@nutui/nutui-react-taro/dist/style.css'
// JMAPP 主题
// import '@nutui/nutui-react-taro/dist/style-jmapp.css'
// JRKF 主题
// import '@nutui/nutui-react-taro/dist/style-jrkf.css'
```

#### 3.1、通过插件实现按需引入

需要注意的是，`在手动按需加载时，你还需要在入口文件中引入 global 类的文件来加载一些 NutUI React Taro 的全局性逻辑和样式：`

```js
// css 主题文件路径
// 默认主题
import '@nutui/nutui-react-taro/dist/styles/themes/default.css'
// 默认暗黑主题
// import '@nutui/nutui-react-taro/dist/styles/themes/default-dark.css'
// JMAPP 主题
// import '@nutui/nutui-react-taro/dist/styles/themes/jmapp.css'
// JRKF 主题
// import '@nutui/nutui-react-taro/dist/styles/themes/jrkf.css'

// scss 主题文件路径
// 默认主题
// import '@nutui/nutui-react-taro/dist/styles/theme-default.scss'
// 默认暗黑主题
// import '@nutui/nutui-react-taro/dist/styles/theme-dark.scss'
// JMAPP 主题
// import '@nutui/nutui-react-taro/dist/styles/theme-jmapp.scss'
// JRKF 主题
// import '@nutui/nutui-react-taro/dist/styles/theme-jrkf.scss'
```

首先安装 `babel-plugin-import` 插件

```sh
# pnpm
pnpm add babel-plugin-import
# npm
npm i babel-plugin-import
# yarn
yarn add babel-plugin-import
```

入口文件需要引入全局样式

:::demo

```js
// app.js

// css 主题文件路径
// 默认主题
import '@nutui/nutui-react-taro/dist/styles/themes/default.css'
// 默认暗黑主题
// import '@nutui/nutui-react-taro/dist/styles/themes/default-dark.css'
// JMAPP 主题
// import '@nutui/nutui-react-taro/dist/styles/themes/jmapp.css'
// JRKF 主题
// import '@nutui/nutui-react-taro/dist/styles/themes/jrkf.css'

// scss 主题文件路径
// 默认主题
// import '@nutui/nutui-react-taro/dist/styles/theme-default.scss'
// 默认暗黑主题
// import '@nutui/nutui-react-taro/dist/styles/theme-dark.scss'
// JMAPP 主题
// import '@nutui/nutui-react-taro/dist/styles/theme-jmapp.scss'
// JRKF 主题
// import '@nutui/nutui-react-taro/dist/styles/theme-jrkf.scss'
```

:::

babel 相关配置：

```js
// babel.config.js
module.exports = {
  presets: [
    // ...
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react-taro',
        camel2DashComponentName: false,
        customName: (name, file) => {
          return `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}`
        },
        // 自动加载 scss 样式文件
        customStyleName: (name) =>
          `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style`,
        // 自动加载 css 样式文件
        // customStyleName: (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style/css`
        // 自动加载 css 样式文件（小程序专用，已移除 RTL 样式，体积更小）
        // customStyleName: (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style/mini`

        // JMAPP 主题
        // 自动加载 scss 样式文件
        // customStyleName: (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style-jmapp`,
        // 自动加载 css 样式文件
        // customStyleName: (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style-jmapp/css`

        // jrkf 端主题
        // 自动加载 scss 样式文件
        // customStyleName: (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style-jrkf`,
        // 自动加载 css 样式文件
        // customStyleName: (name) => `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style-jrkf/css`
      },
      'nutui-react',
    ],
  ],
}
```

若您的项目采用 scss，则需要在 config/index 中增加如下配置：

```js
{
  sass: {
    // resource 仅注入纯 Sass 变量/函数，不含实体 CSS 输出
    resource: [
      path.resolve(__dirname, 'node_modules/@nutui/nutui-react-taro/dist/styles/variables.scss'),
      // JMAPP 主题
      // path.resolve(__dirname, 'node_modules/@nutui/nutui-react-taro/dist/styles/variables-jmapp.scss'),
      // JRKF 主题
      // path.resolve(__dirname, 'node_modules/@nutui/nutui-react-taro/dist/styles/variables-jrkf.scss'),
    ],
  }
}
```

## 注意事项

#### 1、检查 Taro 是否安装成功

```sh
taro -v
```

出现 Taro 版本号说明安装成功。

#### 2、安装 Taro 过程中出现 Saas 相关错误

可以考虑安装 `mirror-config-china` 后重试。

```sh
npm install -g mirror-config-china
```

#### 3、小程序项目运行时出现「找不到模板」的错误提示

解决方案：在 Taro 配置文件中关闭 prebundle 及 cache

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

#### 4、样式单位转化

组件 CSS 单位使用的是 **px**，但是在 `Taro` 编译时，Taro 会帮你对样式做尺寸转换操作，需要注意的是，要对 **NutUI** 相关的样式设置在黑名单里，如：

:::demo

```js
// config/index.js
config = {
  h5: {
    postcss: {
      pxtransform: {
        enable: true,
        // 包含 `nut-` 的类名选择器中的 px 单位不会被解析
        config: { selectorBlackList: ['nut-'] },
      },
    },
  },
}
```

:::

## 样式体积优化

### 优化一：按需加载样式（收益最大）

全量引入 `style.css`（约 288KB）时，未使用的组件样式也会被打包进去。推荐通过 `babel-plugin-import` 实现按需加载，只引入实际使用的组件样式。详见上方 **3.1 通过插件实现按需引入**。

### 优化二：小程序使用无 RTL 版样式

小程序环境（weapp/jd/tt 等）不需要 RTL（从右到左）样式。NutUI 提供了去除 RTL 规则的专用产物：

| 产物 | 说明 | 体积 |
| --- | --- | --- |
| `style.css` | 完整样式（含 RTL） | 基准 |
| `style.mini.css` | 小程序专用（移除 RTL） | 约节省 **25.5KB（7%）** |

**全量引入时：**

```js
// 替换原来的 style.css
import '@nutui/nutui-react-taro/dist/style.mini.css'
```

**按需引入时**，将 `babel-plugin-import` 的 `customStyleName` 改为 `style/mini`：

```js
// babel.config.js
customStyleName: (name) =>
  `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style/mini`
```

### 优化三：sass.resource 只注入纯 Sass 变量

`sass.resource` 会将文件内容注入到**每一个** SCSS 文件头部参与编译。应只注入不含实体 CSS 输出的纯变量/函数文件（`variables.scss`），将 `theme-default.scss` 移至全局入口单次引入，避免 380+ 行 CSS 重复编译。详见**主题定制**文档。

### 收益汇总

| 优化项 | 节省体积 | 适用场景 |
| --- | --- | --- |
| 按需加载（10 个组件） | ~6.4KB | 所有项目 |
| 全量改用 `style.mini.css` | ~25.5KB | 小程序项目 |
| 两者叠加（按需 + mini，10 个组件） | ~6.4KB | 小程序按需加载 |
| 两者叠加（按需 + mini，全部组件） | ~66.5KB | 小程序全量使用 |
