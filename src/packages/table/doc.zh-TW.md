# Table組件

用於展示基礎表格。

## 引入

```tsx
import { Table } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 是否顯示邊框，文字對齊

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 顯示總結欄

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 條紋、明暗交替

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 隱藏表頭

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 無數據默認展示，支持自定義

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義單元格

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 支持異步渲染(5秒後看效果)

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 支持排序

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 支持排序替換ICON

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 固定表頭

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 固定左側列

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 固定右側列

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Table

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| bordered | 是否顯示邊框 | `boolean` | `true` |
| columns | 表頭數據 | `TableColumnProps[]` | `[]` |
| data | 表格數據 | `Object[]` | `[]` |
| summary | 是否顯示簡介 | `ReactNode` | `-` |
| striped | 條紋是否明暗交替 | `boolean` | `false` |
| showHeader | 是否顯示表頭 | `boolean` | `true` |
| noData | 自定義無數據 | `ReactNode` | `-` |
| onSort | 點擊排序按鈕觸發 | `item: TableColumnProps, data: Array<any>` | `-` |
| sorterIcon | 排序 icon | `ReactNode` | `<ArrowDown />` |

### TableColumnProps

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| key | 列的唯一標識 | `string` | `-` |
| title | 表頭標題 | `string` | `-` |
| align | 列的對齊方式 | `left` \| `center` \| `right` | `left` |
| sorter | 排序，可選值有 true,function, default, 其中 default表示點擊之後可能會依賴接口, function可以返回具體的排序函數, default表示採用默認的排序算法 | `boolean` \| `Function` \| `string` | `-` |
| render | 自定義渲染列數據，優先級高 | `Function(record)` | `-` |
| width | 列寬度 | `number` | `auto` |
| fixed | 固定位置 | `left` \| `right` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-table-border-color | 表格的邊框色值 | `#ececec` |
| \--nutui-table-cols-padding | 表格列的padding值 | `10px` |
| \--nutui-table-tr-even-background-color | 表格偶數行的背景色 | `$color-background` |
| \--nutui-table-tr-odd-background-color | 表格奇數行的背景色 | `$white` |
| \--nutui-table-sticky-left-shadow | 表格左側固定陰影 | `4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-table-sticky-right-shadow | 表格右側固定陰影 | `-4px 0 8px 0 rgba(0, 0, 0, 0.1)` |
