# MaterialView 材质视图

跨端毛玻璃 / 材质视图组件。基于 CSS `backdrop-filter` 实现细腻的毛玻璃、叠加色与内发光高光，参数可由 `scene` 自动查表预设，也可通过自定义属性微调。

## 引入

```tsx
import { MaterialView } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础毛玻璃效果

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 场景预设（immersive）

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 渐变模糊效果

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

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
