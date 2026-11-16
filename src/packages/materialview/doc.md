# MaterialView 材质视图

跨端毛玻璃 / 材质视图组件。基于 CSS `backdrop-filter` 实现细腻的毛玻璃、叠加色与内发光高光，参数可由 `scene` 自动查表预设，也可通过自定义属性微调。

## 引入

```tsx
import { MaterialView } from '@nutui/nutui-react'
```

## 示例代码

### 各材质场景一览

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 底部导航背板（bottom-bar）

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 沉浸式与悬浮购买栏

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## MaterialView Props

| 属性 | 说明 | 类型 | 必填 | 默认值 |
| --- | --- | --- | --- | --- |
| scene | 材质场景，7 种见 MaterialScene | `MaterialScene` | 否 | — |
| targetId | 模糊标识/ID | `string` | 否 | — |
| darkMode | 强制指定暗色模式（`true`: 暗色 / `false`: 亮色），未传时自动跟随系统 | `boolean` | 否 | 自动跟随系统 |
| frostedGlass | 自定义毛玻璃配置 | `FrostedGlassConfig` | 否 | — |
| gradientBlur | 自定义渐变模糊配置 | `GradientBlurConfig` | 否 | — |
| overlayColor | 自定义叠加颜色（支持 rgba / hex） | `string` | 否 | — |
| style | 自定义行内样式，组件自动补充未设置的圆角、背景色等 | `CSSProperties` | 否 | — |
| className | 追加类名 | `string` | 否 | — |

## MaterialScene 取值

| 值 | 语义说明 | 对应设计规范 | 典型用途 |
| --- | --- | --- | --- |
| `top-solid` | 带底色悬浮容器（浅白 / 暗黑） | FG-Light / FG-Dark | 搜索框、胶囊导航（带背景底色 + 内发光） |
| `top-plain` | 无底色高透悬浮容器 | FG-Clear（高透） | 轻量透明浮层、高透水晶胶囊 |
| `top-bar` | 吸顶通栏背板 | 纯色背板 | 顶部吸顶通栏导航条 |
| `promotion-fair` | 浅色换肤悬浮容器 | FG-Skin-L | 浅色皮肤活动页浮层 |
| `promotion-deep` | 深色换肤悬浮容器 | FG-Skin-D | 深色皮肤活动页浮层 |
| `immersive` | 沉浸式悬浮容器（强制暗色） | FG-Dark | 视频 / 沉浸页浮层 |
| `bottom-bar` | 底部导航背板 | 渐变背景 | 底部 Tab 栏 |

## 类型定义

### FrostedGlassConfig

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| style | `ultra-thin-light` / `thin-light` / `regular-light` / `thick-light` / `chrome-light` 及对应 `-dark` 版本 | `string` | **必填** |
| alpha | 透明度 | `number` | — |

### GradientBlurConfig

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| minBlur | 底端模糊强度比例 [0,1] | `number` | `0` |
| maxBlur | 顶端模糊强度比例 [0,1] | `number` | `0` |
| overlayAlpha | 颜色遮罩透明度 [0,1] | `number` | `0` |
| overlayColor | 颜色遮罩色值 | `string` | — |

## 辅助函数

| 函数 | 说明 |
| --- | --- |
| `getFrostedPreset(scene, dark)` | 获取场景的毛玻璃预设（blurRadius / borderRadius / tintColor / boxShadow） |
| `getCornerRadius(scene)` | 获取场景默认圆角值 |
| `getMaterialClassName(scene, dark)` | 获取场景对应的规范类名 |

## 主题 CSS 变量

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| `--nut-material-shadow-light` | `0 2PX 4PX rgba(0, 0, 0, 0.06), ...` | 浅色场景内发光多层高光阴影 |
| `--nut-material-shadow-dark` | `0 2PX 4PX rgba(0, 0, 0, 0.06), ...` | 暗色场景内发光多层高光阴影 |
| `--nut-material-shadow-immersive` | `var(--nut-material-shadow-dark)` | 沉浸式场景阴影 |
| `--nut-material-tint-top-solid` | `rgba(255, 255, 255, 0.65)` | `top-solid` 浅色底色 |
| `--nut-material-tint-top-solid-dark` | `rgba(20, 23, 26, 0.6)` | `top-solid` 暗色底色 |
| `--nut-material-tint-top-plain` | `rgba(255, 255, 255, 0.05)` | `top-plain` 底色 |
| `--nut-material-tint-top-bar` | `rgba(255, 255, 255, 0.9)` | `top-bar` 浅色底色 |
| `--nut-material-tint-top-bar-dark` | `rgba(20, 23, 26, 0.85)` | `top-bar` 暗色底色 |
| `--nut-material-tint-promotion-fair` | `rgba(255, 255, 255, 0.85)` | `promotion-fair` 浅色换肤底色 |
| `--nut-material-tint-promotion-deep` | `rgba(255, 255, 255, 0.2)` | `promotion-deep` 深色换肤底色 |
| `--nut-material-tint-immersive` | `rgba(20, 23, 26, 0.6)` | `immersive` 沉浸式底色 |
| `--nut-material-tint-bottom-bar` | `rgba(255, 255, 255, 0.8)` | `bottom-bar` 浅色底色 |
| `--nut-material-tint-bottom-bar-dark` | `rgba(20, 23, 26, 0.8)` | `bottom-bar` 暗色底色 |
| `--nut-material-blur-default` | `3PX` | 默认模糊半径 |
| `--nut-material-blur-top-bar` | `10PX` | 顶部通栏背板模糊半径 |
| `--nut-material-radius-floating` | `8px` | 悬浮容器圆角 |
| `--nut-material-radius-bar` | `0px` | 通栏背板圆角 |
