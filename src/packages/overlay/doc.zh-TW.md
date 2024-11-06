# Overlay 遮罩層

創建一個遮罩層，通常用於阻止用戶進行其他操作

## 引入

```tsx
import { Overlay } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義遮罩樣式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 設置動畫時間

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 不鎖定背景滾動

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 嵌套內容

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 點擊遮罩不關閉

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Overlay

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 當前組件是否顯示 | `boolean` | `false` |
| duration | 動畫時長，單位毫秒 | `number` | `300` |
| lockScroll | 背景是否鎖定，strict 用於支援 iOS12 | `boolean\|strict` | `true` |
| zIndex | 設置組件頁面層級 | `number` | `1000` |
| closeOnOverlayClick | 是否點擊遮罩關閉 | `boolean` | `true` |
| onClick | 點擊時觸發 | `event: Event` | `-` |
| afterClose | 完全關閉後觸發 | `() => void` | `-` |
| afterShow | 完全展示後觸發 | `() => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-overlay-bg-color | 遮罩層背景顏色 | `$color-mask` |
| \--nutui-overlay-zIndex | overlay 的 z-index | `1000` |
| \--nutui-overlay-content-bg-color | 遮罩層嵌套內容背景顏色 | `$white` |
| \--nutui-overlay-content-color | 遮罩層嵌套內容字體顏色 | `$color-title` |
| \--nutui-overlay-animation-duration | 遮罩層動畫延時的時長 | `0.3s` |
