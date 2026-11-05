# 主题定制

## 介绍

NutUI-React 支持灵活的样式定制，满足多种视觉业务和品牌需求，包括但不限于全局主色调和特定组件视觉定制的支持。
<br />
<br />
在 NutUI-React 的 3.0 版本中，依然可以使用 Sass 定制主题功能，我们在原有的主题定制功能上新增了 CSS 变量， 无需引入额外的 SCSS 样式文件，就可以使用到新的主题定制功能。

## 方式一 使用 CSS Variables 进行主题配置

`NutUI-React` 组件可以通过 [CSS Vars](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 `CSS` 变量，可以实现定制主题、动态切换主题等功能。
<br />
<br />
您可在 [ConfigProvider 组件](#/zh-CN/component/configprovider) 进行体验。我们更推荐使用替换 [CSS Vars](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 的方式来进行个性化的主题配置。

## 方式二 使用 Sass 变量 进行主题配置

### 第一步 新建自定义变量 SCSS 文件

在本地项目中新建一个 `SCSS` 文件 `custom_theme.scss` 进行自定义。

**使用 SCSS 文件自定义主题时，需将按需引入设置为 scss 文件的方式，参考快速入手中的自动按需加载配置项中的描述**

```scss
// 主色调
$color-primary: #fa2c19;
$color-primary-stop-1: #fa6419;
...
```

### 第二步 修改本地项目 Webpack 或者 Vite 的配置文件

修改 `vite` 或者 `webpack` 配置文件中 **sass-loader** 的配置。如下示例：

#### Vite 方式

```javascript
// https://vitejs.dev/config/
export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";@import "./your/custom_theme.scss";`,
      },
    },
  },
})
```

#### Webpack 方式

```javascript
{
  test: /\.(sa|sc)ss$/,
  use: [
    {
      loader: 'sass-loader',
      options: {
        // 注意：在 sass-loader 不同版本，这个选项名是 是不一样的，具体可参考 sass-loader对应的版本文档
        data: `@import "./assets/custom_theme.scss";@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`,
      }
    }
  ]
}
```

### 推荐实践：使用轻量级核心 Tokens (`variables-core.scss`)

NutUI-React (Taro 版) 将核心设计系统变量独立抽离为 `variables-core.scss`（~260 行，相较于全量 3300+ 行的 `variables.scss` **精简 92%**）。

> [!WARNING] 关键注意事项：请检查你的组件样式引入方式
>
> - **如果引入的是 CSS 产物（推荐，如 `style: 'css'` 或全量引入 `style.css`）**：组件样式发包前已由官方预编译完成，业务在 `sass.resource` / `additionalData` 中注入 `variables-core.scss` 供业务自身样式使用，**完全安全且体积大幅精简**。
> - **如果引入的是 SCSS 源码按需编译（如配置了 `style: true` 或直接 import 组件 `.scss` 源码）**：组件 SCSS 源码内部依赖各组件特定的私有变量（如 `$tabs-titles-height`、`$button-default-height`），**此时必须全局注入全量的 `variables.scss`**，不能替换为 `variables-core.scss`，否则编译组件源码时会报 `Undefined variable` 错误。

#### 包含内容

- 全局响应式缩放函数（`scale-px`、`scale-font-px`、`scale-icon-px`）
- 基础色彩体系（主色 `$color-primary`、次色、功能状态色、文本/背景/边框/蒙层中性色）
- 基础阶梯字号（`$font-size-...`）、行高与字重
- 常用基础间距（`$spacing-...`）、圆角（`$radius-...`）、阴影与层级
- 基础动画时间与贝塞尔函数（`$animation-...`）

#### 适用场景

1. **小程序全局注入（推荐）**：业务页面或自研业务组件只需使用通用 Design Tokens，无需为每个 SCSS 文件注入上千行组件私有变量，避免小程序样式体积膨胀与编译超时。
2. **极简主题覆盖**：只需定制品牌色、通用圆角等全局视觉，配合 `variables-core.scss` 最轻量。

#### 配置示例

##### Taro `config/index.js` 配置（推荐）

```javascript
// config/index.js
const path = require('path')

module.exports = {
  // ...
  sass: {
    resource: [
      // 推荐：仅注入核心变量，体积精简 92%，编译更高效
      path.resolve(
        __dirname,
        'node_modules/@nutui/nutui-react-taro/dist/styles/variables-core.scss'
      ),
      // 本地自定义主题变量
      path.resolve(__dirname, 'src/styles/custom_theme.scss'),
    ],
  },
}
```

##### Vite 方式（Taro H5 / Harmony Vite 模式）

```javascript
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui-react-taro/dist/styles/variables-core.scss";@import "./your/custom_theme.scss";`,
      },
    },
  },
})
```

##### 业务样式中直接引用

```scss
// 在业务页面或业务组件的 SCSS 中
@import '@nutui/nutui-react-taro/dist/styles/variables-core.scss';

.my-business-card {
  padding: $spacing-base;
  border-radius: $radius-base;
  color: $color-title;
  background-color: $color-background;

  .primary-action {
    color: $color-primary;
    font-size: $font-size-l;
    font-weight: $font-weight-bold;
  }
}
```

#### 选型建议

| 需求与样式引入方式 | 推荐文件 | 优势与说明 |
| --- | --- | --- |
| **引入组件 CSS 产物 + 业务自身写样式 / 全局 sass.resource** | `variables-core.scss` (⭐推荐) | 仅 ~260 行，精简 92%，避免小程序 WXSS 膨胀与编译超时 |
| **覆盖品牌主色、通用圆角、基础间距等全局设计规范** | `variables-core.scss` (⭐推荐) | 涵盖核心 Design Tokens，轻装上阵 |
| **本地现场编译组件 SCSS 源码（`style: true`）或微调组件私有变量** | `variables.scss` (⚠️必选) | 包含全部 100+ 组件私有样式控制变量，保障组件 SCSS 正常编译 |

## 暗黑模式

NutUI-React (Taro 版) 原生支持暗黑模式。组件库在暗黑模式下使用一套独立调优的色彩变量。

### 方案 A：跟随 APP 主动切换（推荐）

如果你的小程序/应用需要由用户在设置中手动切换亮色/暗黑模式（不强制跟随系统），可以使用**类名切换方案**。

#### 1. 引入样式

首先，在项目入口或全局样式文件中引入组件库的默认样式和暗黑样式。你可以根据项目配置选择引入 CSS 或 SCSS：

##### 引入 CSS 样式（适用于普通 JS/TS 项目）：

参考方式二。

##### 引入 SCSS 样式（适用于配置了 Sass 预处理器的项目）：

参考方式二。

#### 2. 挂载类名

在小程序的根页面容器（如 Taro 的 `View` 标签或全局包裹页面组件）上挂载 `.nut-theme-dark` 类名：

`isDark` 的值，需要桥接 APP 的实现。

```tsx
import React, { useState } from 'react'
import { View, Button } from '@tarojs/components'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <View
      className={isDark ? 'nut-theme-dark' : ''}
      style={{ minHeight: '100vh' }}
    >
      <Button onClick={() => setIsDark(!isDark)}>
        当前模式：{isDark ? '暗黑模式' : '普通模式'}
      </Button>
      {/* 你的其他组件 */}
    </View>
  )
}
```

#### 3. 配合 ConfigProvider 进行定制

如果你需要更灵活地在 Taro/React 逻辑中控制暗黑模式，或者对暗黑色彩变量进行定制，可以结合 `ConfigProvider` 使用：

```tsx
import React, { useState } from 'react'
import { View, Button } from '@tarojs/components'
import { ConfigProvider } from '@nutui/nutui-react-taro'

// 自定义暗黑模式下的主色调
const darkTheme = {
  nutuiColorPrimary: '#ff0f23',
  nutuiColorBackgroundOverlay: '#1f2226',
}

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <ConfigProvider
      theme={isDark ? darkTheme : undefined}
      className={isDark ? 'nut-theme-dark' : ''}
    >
      <View style={{ minHeight: '100vh' }}>
        <Button onClick={() => setIsDark(!isDark)}>切换模式</Button>
        {/* 组件库在暗黑模式下会自动识别 .nut-theme-dark，且通过 theme 属性定制的变量会自动覆盖 */}
      </View>
    </ConfigProvider>
  )
}
```

---

### 方案 B：跟随系统媒体查询

如果你的应用希望**完全自动跟随手机操作系统**的亮暗模式设置（例如微信小程序的深色模式），无需手动提供开关，可使用**系统媒体查询方案**。

#### 1. 编写全局 SCSS

在全局 SCSS 样式文件中利用媒体查询动态注入暗黑变量。对于小程序环境，样式需要作用在 `page` 节点上以覆盖整页背景：

```scss
@media (prefers-color-scheme: dark) {
  page {
    // 导入组件库自带的暗黑变量映射
    @import '@nutui/nutui-react-taro/dist/styles/theme-dark.scss';
  }
}
```

#### 2. 引入配置

确保你的小程序（以微信小程序为例）在 `app.json` 或 `app.config.ts` 中配置支持暗黑模式：

```json
{
  "darkmode": true
}
```

---

### 方案对比与选用建议

| 方案 | 适用场景 | 实现原理 | 优点 |
| --- | --- | --- | --- |
| **方案 A (跟随 APP)** | 应用内需要提供“深色/浅色”的手动切换开关，不强绑定系统。 | 挂载类名 `.nut-theme-dark` 或结合 `ConfigProvider` | 灵活度最高，支持局部容器应用暗黑，可通过 JS/TS 灵活控制。 |
| **方案 B (跟随系统)** | 应用不需要手动开关，纯粹期望手机系统是深色模式时，小程序自动呈现深色。 | `@media (prefers-color-scheme: dark)` | 无需 JS 介入，完全由宿主小程序容器自动触发渲染。 |

```

```
