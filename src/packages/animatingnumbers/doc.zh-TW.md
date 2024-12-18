# AnimatingNumbers 數字動畫

數字動畫集合

## 引入

```tsx
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## 示例代碼

### AnimatingNumbers.CountUp - 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### C - 自定義樣式，動態修改數據（需要指定最大位數）

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## AnimatingNumbers

### AnimatingNumbers.CountUp Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| length | 設置最大展示長度，數值位數不夠，數值前面按位補 0 | `number` | `0` |
| value | 結束值,必填項 | `string` | `number` |
| delay | 等待動畫執行時間，單位 ms | `number` | `300` |
| duration | 動畫執行時間，單位 s | `number` | `1` |
| thousands | 是否有千位分隔符 | `boolean` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-countup-width | 每個數字的寬度 | `auto` |
| \--nutui-countup-height | 數字高度 | `32px` |
| \--nutui-countup-base-size | 字號 | `18px` |
| \--nutui-countup-border-radius | 每個數字的邊框圓角 | `4px` |
| \--nutui-countup-lr-margin | 每個數字的margin | `0` |
| \--nutui-countup-bg-color | 每個數字塊的背景色 | `inherit` |
| \--nutui-countup-color | 每個數字塊的字色 | `$color-title` |
| \--nutui-countup-separator-color | 分隔符的字體顏色 | `$color-title` |
