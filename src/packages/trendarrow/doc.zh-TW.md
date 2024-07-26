# TrendArrow 指標趨勢

帶有箭頭指示的百分比數字,用以展示指標趨勢

## 引入

```tsx
import { TrendArrow } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 改變文字顏色

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 指定小數位

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 箭頭在前面

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 顯示正負號

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 是否展示0

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定義圖標

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TrendArrow

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 數值，大於0時箭頭嚮上，小於0時箭頭嚮下 | `number` | `-` |
| digits | 小數位精度 | `number` | `2` |
| symbol | 是否顯示加減號 | `boolean` | `false` |
| zero | 是否顯示 0 | `boolean` | `false` |
| left | 是否在數字左側顯示箭頭 | `boolean` | `false` |
| sync | 文字顏色是否與箭頭同步 | `boolean` | `true` |
| color | 文字顏色 | `string` | `#333333` |
| riseColor | 嚮上箭頭顏色 | `string` | `#fa2c19` |
| dropColor | 嚮下箭頭顏色 | `string` | `#64b578` |
| riseIcon | 自定義嚮上箭頭icon | `React.ReactNode` | `<TriangleUp/>` |
| dropIcon | 自定義嚮下箭頭icon | `React.ReactNode` | `<TriangleDown/>` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | 指標趨勢的文字大小 | `14px` |
| \--nutui-trendarrow-icon-margin | 指標趨勢的文字與圖標間距 | `4px` |
