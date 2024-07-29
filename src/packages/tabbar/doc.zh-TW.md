# Tabbar 標簽欄

底部導航常用場景

## 引入

```tsx
import { Tabbar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義選中

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 只配圖標

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 無圖標

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 徽標提示

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 紅點

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 可自定義icon個數的tabbar

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 固定底部

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 默認選中的標簽的索引值 | `number` | `0` |
| value | 選中的標簽的索引值 | `number` | `-` |
| fixed | 是否固定在頁面底部，為 true 時默認開啟 safeArea | `boolean` | `false` |
| activeColor | icon激活的顏色 | `string` | `#1989fa` |
| inactiveColor | icon未激活的顏色 | `string` | `#7d7e80` |
| safeArea | 是否開啟iphone繫列全面屏底部安全區適配 | `boolean` | `false` |
| onSwitch | 切換頁簽時觸發事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標簽頁的標題 | `ReactNode` | `-` |
| icon | 自定義圖標 | `ReactNode` | `-` |
| value | 徽標中顯示的內容，支持數字、字符和自定義內容 | `ReactNode` | `-` |
| max | value 為數值時，最大值 | `number` | `99` |
| dot | 徽標是否為小點 | `boolean` | `false` |
| top | 徽標的上下偏移量，支持單位設置，可設置為：5 等 | `number` | `0` |
| right | 徽標的左右偏移量，支持單位設置，可設置為：5 等 | `number` | `0` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 高度 | `50px` |
| \--nutui-tabbar-active-color | 選中顏色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未選中顏色 | `$color-title` |
| \--nutui-tabbar-border-top | 上邊框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下邊框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 陰影 | `none` |
| \--nutui-tabbar-text-font-size | 標題字體大小 | `$font-size-xs` |
| \--nutui-tabbar-text-large-font-size | 無圖標時標題字體大小 | `$font-size-large` |
| \--nutui-tabbar-text-large-font-weight | 無圖標時標題字體粗細 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字體行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 標題上外邊距 | `3px` |
