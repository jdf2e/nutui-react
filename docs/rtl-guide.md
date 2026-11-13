# NutUI RTL 使用与体积优化指南 (RTL Guide)

NutUI-React 支持从右向左（Right-to-Left，简称 RTL）的文本排版与界面镜像布局，满足阿拉伯语、希伯来语、波斯语等国际化语言场景的需求。

同时，为了兼顾开源通用性与国内移动端/小程序的极致包体积诉求，NutUI 提供了灵活的**构建期编译开关**与**双轨轻量样式产物**。

---

## 一、开启与使用 RTL

### 1. 全局配置（推荐）

在应用根节点使用 `ConfigProvider` 包裹，并设置 `direction="rtl"`：

```tsx
import React from 'react'
import { ConfigProvider, Button, Space } from '@nutui/nutui-react'
// 小程序端: import { ConfigProvider, Button, Space } from '@nutui/nutui-react-taro'

export default function App() {
  return (
    <ConfigProvider direction="rtl">
      <Space>
        <Button type="primary">确认</Button>
        <Button>取消</Button>
      </Space>
    </ConfigProvider>
  )
}
```

### 2. HTML 标签级配置

Web H5 环境下，也可以直接在 `<html>` 或 `<body>` 上设置 `dir="rtl"` 属性：

```html
<html dir="rtl">
  <!-- NutUI 组件将自动感知并呈现 RTL 布局 -->
</html>
```

### 3. 支持 RTL 镜像的组件范围

NutUI 内置了超过 50 个常用组件的 RTL 镜像支持，包括但不限于：

- **布局与导航**：`Tabs`, `NavBar`, `TabBar`, `Col`, `Grid`, `Elevator`, `Tour`
- **基础与交互**：`Button`, `Tag`, `Badge`, `Progress`, `Rate`, `TrendArrow`
- **表单与输入**：`Input`, `SearchBar`, `Checkbox`, `Radio`, `FormItem`, `Range`, `Uploader`
- **弹层与反馈**：`Popup`, `Dialog`, `Toast`, `ActionSheet`, `Popover`, `NoticeBar`

---

## 二、国内/无需 RTL 项目的包体积优化指南

国内业务（如微信小程序、京东小程序、普通国内 H5）通常 100% 运行在从左向右（LTR）环境中。默认包含的 RTL 样式规则约占 **6.3 KB** CSS 体积。

如果您不需要 RTL 支持，可通过以下方式之一在构建时**零成本剔除全部 RTL 规则**：

### 方式一：Sass 编译期宏开关（针对引用 SCSS 源码的工程）

NutUI 在 `variables.scss` 中定义了全局宏变量 `$nutui-enable-rtl`：

```scss
$nutui-enable-rtl: true !default; // 默认为 true 保证开源国际化兼容
```

#### 1. Taro 工程配置

在 `config/index.js`（或 `config/index.ts`）中，为 Sass 注入全局变量覆盖：

```js
// config/index.js
module.exports = {
  // ...
  sass: {
    resource: [
      // 声明关闭 RTL，必须置于 @nutui 样式变量之前
      '$nutui-enable-rtl: false;',
    ],
    // 或者使用 data 配置:
    // data: '$nutui-enable-rtl: false; @import "@nutui/nutui-react-taro/dist/styles/variables.scss";',
  },
}
```

#### 2. Web / Vite 工程配置

在 `vite.config.ts` 中配置 Sass 预处理器选项：

```ts
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$nutui-enable-rtl: false;`,
      },
    },
  },
})
```

#### 3. Web / Webpack 工程配置

在 `webpack.config.js` 的 `sass-loader` 选项中配置：

```js
{
  loader: 'sass-loader',
  options: {
    additionalData: `$nutui-enable-rtl: false;`,
  },
}
```

> **效果**：Sass 编译器在编译阶段完全跳过所有组件的 RTL 块，输出产物中 **0 字节** RTL 规则。

---

### 方式二：引入无 RTL 轻量样式产物（针对引入已编译 CSS 的工程）

NutUI 在构建 npm 发包时，除了生成默认包含 RTL 的 `style.css` 产物外，还为每个组件及全量包同步生成了剥离 RTL 的 **`.mini.css`** 与 **`mini.js`** 产物。

#### 1. 全量引入方式

将原本的 `style.css` 替换为 `style.mini.css`：

```js
// 替换前：包含全量 RTL 样式
// import '@nutui/nutui-react-taro/dist/style.css'

// 替换后：纯净无 RTL 样式产物（节省 ~6.3 KB）
import '@nutui/nutui-react-taro/dist/style.mini.css'

// Web H5 端同理:
// import '@nutui/nutui-react/dist/style.mini.css'
```

#### 2. babel-plugin-import 按需引入方式

在 `babel.config.js` 中配置 `customStyleName` 指向组件目录下的 `style/mini`：

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react-taro',
        libraryDirectory: 'dist/es/packages',
        camel2DashComponentName: false,
        // 自动加载无 RTL 的轻量 CSS 样式
        customStyleName: (name) =>
          `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style/mini`,
      },
      'nutui-react-taro',
    ],
  ],
}
```

#### 3. @nutui/inject-ui-styles 插件方式

如果您在 Taro 小程序工程中使用了 `@nutui/inject-ui-styles` 插件，只需将 `style` 设置为 `'mini'`：

```js
// config/index.js
plugins: [
  [
    '@nutui/inject-ui-styles',
    {
      style: 'mini', // 自动按需注入各组件无 RTL 的 style/mini.js 产物
    },
  ],
]
```

> **注意**：`mini` 产物基于 CSS 变量实现，在 **harmony / dynamic（动态化）平台**下不生效。这两个平台会强制回退加载 `style.harmony.css`（鸿蒙不支持 CSS 变量），插件会输出警告日志提示。如需在这类平台精简 RTL，请改用「方式一：Sass 宏开关」。

---

## 三、各配置方式对比与推荐

| 方案 | 适用场景 | 接入改动 | CSS 节省 | 是否向后兼容 |
| --- | --- | --- | --- | --- |
| **默认状态** | 海外项目 / 需要阿拉伯语等 RTL 场景 | 默认无需任何配置 | 0 (全量功能) | 100% |
| **Sass 宏开关 (`$nutui-enable-rtl: false`)** | 使用 SCSS 源码编译的小程序 / Web 项目 | 增加 1 行 SCSS 配置 | **−6.3 KB** | 100% |
| **`style.mini.css` / `style/mini`** | 使用编译后 CSS / babel-plugin-import 项目 | 调整样式引入路径 | **−6.3 KB** | 100% |
| **`inject-ui-styles` (`style: 'mini'`)** | Taro 普通小程序工程（**不适用于 harmony/dynamic 平台，会自动回退 style.harmony.css**） | 更改插件 options | **−6.3 KB** | 100% |
