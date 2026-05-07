# Price 價格

用來對商品價格數值的小數點前後部分應用不同樣式，還支持人民幣符號、千位分隔符、設置小數點位數等功能。

## 引入

```tsx
import { Price } from '@nutui/nutui-react'
```

## 示例代碼

### 支持尺寸：small、normal、large、xlarge

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 場域分類：原子級、模塊級、列表級、頁面級

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 不保留小數

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 有人民幣符號，無千位分隔

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 帶人民幣符號，有千位分隔，保留小數點後三位

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

### 自定義顏色

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 數據原樣輸出

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## Price

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| color | 價格類型, 支持自定義顏色 | `primary` \| `gray` \| `darkgray` \| `string` | `primary` |
| price | 價格數量 | `number` | `0` |
| symbol | 符號類型 | `string` | `&yen;` |
| digits | 小數位位數，傳入`null`數據原樣輸出 | `number` \| `null` | `2` |
| thousands | 是否按照千分號形式顯示 | `boolean` | `false` |
| position | 符號顯示在價格前或者後，`before`、`after` | `string` | `before` |
| size | 價格尺寸，`xlarge` \| `large` \| `normal` \| `small` | `string` | `normal` |
| line | 是否劃線價 | `boolean` | `false` |
| raw | 開啟後，當 price 包含非法字符時，原樣展示，不做格式化處理 | `boolean` | `false` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-price-primary-color | color為primary時文字顏色 | `#ff0f23` |
| \--nutui-price-color | color為gray時文字顏色 | `#888b94` |
| \--nutui-price-darkgray-color | color為darkgray時文字顏色 | `#1a1a1a` |
| \--nutui-price-line-color | 劃線價顏色 | `#888b94` |
| \--nutui-price-symbol-padding-right | 符號的右內邊距 | `0px` |
| \--nutui-price-symbol-xlarge-size | xlarge 尺寸符號字體大小 | `12px` |
| \--nutui-price-integer-xlarge-size | xlarge 尺寸整數部分字體大小 | `24px` |
| \--nutui-price-decimal-xlarge-size | xlarge 尺寸小數部分字體大小 | `12px` |
| \--nutui-price-symbol-large-size | large 尺寸符號字體大小 | `12px` |
| \--nutui-price-integer-large-size | large 尺寸整數部分字體大小 | `18px` |
| \--nutui-price-decimal-large-size | large 尺寸小數部分字體大小 | `12px` |
| \--nutui-price-symbol-normal-size | normal 尺寸符號字體大小 | `12px` |
| \--nutui-price-integer-normal-size | normal 尺寸整數部分字體大小 | `16px` |
| \--nutui-price-decimal-normal-size | normal 尺寸小數部分字體大小 | `12px` |
| \--nutui-price-symbol-small-size | small 尺寸符號字體大小 | `12px` |
| \--nutui-price-integer-small-size | small 尺寸整數部分字體大小 | `12px` |
| \--nutui-price-decimal-small-size | small 尺寸小數部分字體大小 | `12px` |

<Contribution name="Price" />
