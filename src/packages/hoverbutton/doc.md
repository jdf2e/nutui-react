# HoverButton

## 介绍

若干功能按钮，通常出现在页面右下角，悬浮且位置固定，不随页面滚动出现位置的偏移； 可根据实际功能替换图标。

## 安装

```tsx
import { HoverButton } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 多个按钮

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 有底部导航栏的情况

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义层级

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义间距

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## HoverButton

### Props

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zIndex | 设置组件页面层级 | `number` | `10` |
| tabbarHeight | 底部导航栏高度（不包含安全区高度） | `number` | `-` |
| icon | 设置按钮图标 | `ReactNode` | `-` |
| onClick | 按钮点击时触发事件 | `Function` | `-` |

## HoverButton.Item

### Props

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 设置按钮图标 | `ReactNode` | `-` |
| onClick | 按钮点击时触发事件 | `Function` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-hoverbutton-spacing | 按钮垂直间距 | `16px` |
| \--nutui-hoverbutton-position-bottom | 按钮区域距离屏幕底部距离 | `48px` |
| \--nutui-hoverbutton-position-right | 按钮区域距离屏幕右侧距离 | `16px` |
| \--nutui-hoverbutton-item-border-color | 按钮边框色 | `rgba(0, 0, 0, 0.06)` |
| \--nutui-hoverbutton-item-background | 按钮背景色-正常态 | `#FFFFFF` |
| \--nutui-hoverbutton-item-background-active | 按钮背景色-点击态 | `#F6F6F6` |
| \--nutui-hoverbutton-item-icon-color | 图标色-正常态 | `#1A1A1A` |
| \--nutui-hoverbutton-item-icon-color-active | 图标色-点击态 | `#595959` |
