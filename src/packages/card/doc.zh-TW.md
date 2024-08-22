# Card 商品卡片

商品卡片，用於展示商品的圖片、價格等信息

## 引入

```tsx
import { Card, Price, Tag } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義商品標簽

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 價格後自定義標簽

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義店鋪介紹

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義右下角內容

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 不顯示價格和店鋪

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Card

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| src | 左側圖片 Url | `string` | `-` |
| title | 標題 | `string` | `-` |
| price | 商品價格 | `string` | `-` |
| vipPrice | 會員價格 | `string` | `-` |
| shopDescription | 店鋪介紹 | `string` | `-` |
| delivery | 配送方式 | `string` | `-` |
| shopName | 店鋪名稱 | `string` | `-` |
| description | 自定義商品介紹 | `ReactNode` | `-` |
| priceTag | 價格後方自定義內容 | `ReactNode` | `-` |
| tag | 店鋪介紹自定義 | `ReactNode` | `-` |
| extra | 右下角內容自定義 | `ReactNode` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-card-border-radius | 卡片、圖片的圓角大小 | `4px` |
