# Divider 分割线

用于将内容分隔为多个区域。

## 引入

```tsx
import { Divider } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

默认渲染一条水平分割线。

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 展示文本

通过插槽在可以分割线中间插入内容。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 内容位置

通过 contentPosition 指定内容所在位置。

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 虚线

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 垂直分割线

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Divider

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentPosition | 内容位置 | `left` \| `center` \| `right` | `center` |
| direction | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-divider-margin | 分割线整体内容的margin值 | `16px 0` |
| \--nutui-divider-border-color | 分割线的边框色值 | `$color-border` |
| \--nutui-divider-text-font-size | 分割线整体内容的font-size大小 | `$font-size-base` |
| \--nutui-divider-text-color | 分割线整体内容的颜色 | `$color-title` |
| \--nutui-divider-line-height | 分割线的行高 | `2px` |
| \--nutui-divider-spacing | 左边分割线与文案的间隔值 | `8px` |
| \--nutui-divider-vertical-height | 垂直分割线的高度 | `12px` |
| \--nutui-divider-vertical-margin | 垂直分割线的margin值 | `0 8px` |
