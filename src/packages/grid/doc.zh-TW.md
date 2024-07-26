# Grid 宮格

用於分隔成等寬區塊進行頁面導航。

## 引入

```tsx
import { Grid } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義列數

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 正方形格子

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 格子間距

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 內容翻轉

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 內容橫向

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 內容翻轉 + 橫向

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 圖標顏色/大小

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 點擊子項事件

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Grid

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| columns | 列數 | `number` \| `string` | `4` |
| gap | 格子之間的間距，默認單位為`px` | `number` \| `string` | `0` |
| center | 是否將格子內容居中顯示 | `boolean` | `true` |
| square | 是否將格子固定為正方形 | `boolean` | `false` |
| reverse | 內容翻轉 | `boolean` | `false` |
| direction | 格子內容排列的方向 | `horizontal` \| `vertical` | `vertical` |
| onClick | 宮格子項點擊事件 | `(index) => void` | `-` |

## Grid.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 文字 | `string` \| `ReactNode` | `-` |
| onClick | 點擊格子時觸發 | `(event: Event) => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-grid-border-color | 邊框顏色 | `#f5f6f7` |
| \--nutui-grid-item-content-padding | 內邊距 | `16px 8px` |
| \--nutui-grid-item-content-bg-color | 背景 | `$white` |
| \--nutui-grid-item-text-margin | 外邊距 | `8px` |
| \--nutui-grid-item-text-color | 文字顏色 | `$color-title` |
| \--nutui-grid-item-text-font-size | 文字字體大小 | `$font-size-small` |
