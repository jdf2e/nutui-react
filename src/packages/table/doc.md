# Table组件

用于展示基础表格

## 引入

```tsx
import { Table } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 是否显示边框，文字对齐

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 显示总结栏

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 条纹、明暗交替

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 隐藏表头

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 无数据默认展示，支持自定义

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义单元格

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 支持异步渲染(5s之后看效果)

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 支持排序

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 支持排序替换ICON

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 固定表头

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 固定左侧列

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 固定右侧列

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Table

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否显示边框 | `boolean` | `true` |
| columns | 表头数据 | `TableColumnProps[]` | `[]` |
| data | 表格数据 | `Object[]` | `[]` |
| summary | 是否显示简介 | `ReactNode` | `-` |
| striped | 条纹是否明暗交替 | `boolean` | `false` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| noData | 自定义无数据 | `ReactNode` | `-` |
| onSort | 点击排序按钮触发 | `item: TableColumnProps, data: Array<any>` | `-` |
| sorterIcon | 排序 icon | `ReactNode` | `<ArrowDown />` |

### TableColumnProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 列的唯一标识 | `string` | `-` |
| title | 表头标题 | `string` | `-` |
| align | 列的对齐方式 | `left` \| `center` \| `right` | `left` |
| sorter | 排序，可选值有 true,function, default, 其中 default表示点击之后可能会依赖接口, function可以返回具体的排序函数, default表示采用默认的排序算法 | `boolean` \| `Function` \| `string` | `-` |
| render | 自定义渲染列数据，优先级高 | `Function(record)` | `-` |
| width | 列宽度 | `number` | `auto` |
| fixed | 固定位置 | `left` \| `right` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-table-border-color | 表格的边框色值 | `#ececec` |
| \--nutui-table-cols-padding | 表格列的padding值 | `10px` |
| \--nutui-table-tr-even-background-color | 表格偶数行的背景色 | `$color-background` |
| \--nutui-table-tr-odd-background-color | 表格奇数行的背景色 | `$white` |
| \--nutui-table-sticky-left-shadow | 表格左侧固定阴影 | `4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-table-sticky-right-shadow | 表格右侧固定阴影 | `-4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
