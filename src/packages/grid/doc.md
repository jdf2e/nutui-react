# Grid 宫格

用于分隔成等宽区块进行页面导航。

## 引入

```tsx
import { Grid } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定义列数

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 正方形格子

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 格子间距

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 内容翻转

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 内容横向

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 内容翻转 + 横向

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 图标颜色/大小

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 点击子项事件

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Grid

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | `number` \| `string` | `4` |
| gap | 格子之间的间距，默认单位为`px` | `number` \| `string` | `0` |
| center | 是否将格子内容居中显示 | `boolean` | `true` |
| square | 是否将格子固定为正方形 | `boolean` | `false` |
| reverse | 内容翻转 | `boolean` | `false` |
| direction | 格子内容排列的方向 | `horizontal` \| `vertical` | `vertical` |
| onClick | 宫格子项点击事件 | `(index) => void` | `-` |

## Grid.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | `string` \| `ReactNode` | `-` |
| onClick | 点击格子时触发 | `(event: Event) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-grid-border-color | 边框颜色 | `#f5f6f7` |
| \--nutui-grid-item-content-padding | 内边距 | `16px 8px` |
| \--nutui-grid-item-content-bg-color | 背景 | `$white` |
| \--nutui-grid-item-text-margin | 外边距 | `8px` |
| \--nutui-grid-item-text-color | 文字颜色 | `$color-title` |
| \--nutui-grid-item-text-font-size | 文字字体大小 | `$font-size-small` |
