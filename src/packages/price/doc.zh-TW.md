# Price 價格

用來對商品價格數值的小數點前後部分應用不同樣式，還支持人民幣符號、仟位分隔符、設置小數點位數等功能。

## 引入

```tsx
import { Price } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法 small normal large

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 不保留小數

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 有人民幣符號，無仟位分隔

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 帶人民幣符號，有仟位分隔，保留小數點後三位

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 調整 symbol 符號位置

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 不展示 symbol 符號

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 異步隨機變更

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 劃線價

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Price

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| price | 價格數量 | `number` | `0` |
| symbol | 符號類型 | `string` | `&yen;` |
| digits | 小數位位數 | `number` | `2` |
| thousands | 是否按照仟分號形式顯示 | `boolean` | `false` |
| position | 符號顯示在價格前或者後，`before`、`after` | `string` | `before` |
| size | 價格尺寸，`large`、`normal`、`small` | `string` | `large` |
| line | 是否劃線價 | `boolean` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-price-symbol-big-size | large 尺寸符號字體大小 | `18px` |
| \--nutui-price-integer-big-size | large 尺寸整數部分字體大小 | `24px` |
| \--nutui-price-decimal-big-size | large 尺寸小數部分字體大小 | `18px` |
| \--nutui-price-symbol-medium-size | normal 尺寸符號字體大小 | `14px` |
| \--nutui-price-integer-medium-size | normal 尺寸整數部分字體大小 | `16px` |
| \--nutui-price-decimal-medium-size | normal 尺寸小數部分字體大小 | `14px` |
| \--nutui-price-symbol-small-size | small 尺寸符號字體大小 | `10px` |
| \--nutui-price-integer-small-size | small 尺寸整數部分字體大小 | `12px` |
| \--nutui-price-decimal-small-size | small 尺寸小數部分字體大小 | `10px` |
| \--nutui-price-line-font-size | 劃線價字體大小 | `10px` |
| \--nutui-price-line-color | 劃線價顏色 | `#757575` |
| \--nutui-price-symbol-padding-right | 符號的右內邊距 | `1px` |
