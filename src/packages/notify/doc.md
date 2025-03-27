# Notify 消息通知

在页面顶部展示消息提示

## 引入

```tsx
import { Notify } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 支持跳转

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 支持关闭

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义样式

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Notify

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| distance | 距离顶部/底部距离 | `number` | `8` |
| navHeight | 顶部导航高度 | `number` | `57` |
| closeable | 是否启用关闭模式 | `boolean` | `false` |
| leftIcon | 左边的 icon | `ReactNode` | `-` |
| rightIcon | 右边的 icon，在 closeable 模式下默认为 `<Close />` | `ReactNode` | `-` |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | `string` | `3000` |
| position | 自定义位置 (top, bottom) | `string` | `top` |
| onClick | 点击事件回调 | `onClick: () => void` | `-` |
| onClose | 关闭事件回调 | `onClose: () => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-notify-height | 消息通知的高度 | `40px` |
| \--nutui-notify-padding | 消息通知的内边距 | `0 12px` |
| \--nutui-notify-border-radius | 消息通知的圆角 | `8px` |
| \--nutui-notify-box-shadow | 消息通知的阴影 | `0px 4px 12px 0px rgba(0, 0, 0, 0.06)` |
| \--nutui-notify-z-index | 消息通知的层级 | `1000` |
| \--nutui-notify-font-size | 消息通知的字体大小 | `$font-size-base` |
| \--nutui-notify-text-color | 消息通知的文本颜色 | `$color-title` |
| \--nutui-notify-background-color | 消息通知的背景颜色 | `$white` |

<Contribution name="Notify" />
