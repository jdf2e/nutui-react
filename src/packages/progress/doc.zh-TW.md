# Progress 進度條

展示操作或任務的當前進度。

## 引入

```tsx
import { Progress } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 設置顏色與寬度

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 顯示百分比

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義顯示內容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義尺寸

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 狀態顯示

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 動態改變

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 延遲加載數據

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Progress

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | `0` |
| color | 進度條線條顏色 | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| background | 進度條背景顏色 | `string` | `#f3f3f3` |
| strokeWidth | 進度條寬度 | `string` | `-` |
| showText | 是否顯示文字內容 | `boolean` | `false` |
| animated | 是否展示動畫效果 | `boolean` | `false` |
| lazy | 每次進入可視區展示進度條動畫 | `boolean` | `false` |
| delay | 延遲數據加載時長，單位 ms | `number` | `0` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-progress-height | 進度條寬度 | `10px` |
| \--nutui-progress-border-radius | 進度條邊框圓角 | `12px` |
| \--nutui-progress-color | 進度條顏色 | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| \--nutui-progress-background | 進度條背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本顏色 | `$color-primary-text` |
| \--nutui-progress-text-padding | 文本內邊距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字體大小 | `9px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本邊框圓角 | `5px` |
| \--nutui-progress-text-background | 文本背景顏色 | `$progress-color` |
