# HoverButton

## 簡介

若干功能按鈕，通常出現在頁面右下角，浮動且位置固定，不會隨頁面滾動出現位置的偏移；可根據實際功能替換圖標。

## 安裝

```tsx
import { HoverButton } from '@nutui/nutui-react-taro'
```

## 代碼演示

### 基礎用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 多個按鈕

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 有底部導航欄的情況

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自訂層級

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自訂間距

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## HoverButton

### Props

| 屬性 | 描述 | 型別 | 點預設值 |
| --- | --- | --- | --- |
| zIndex | 設定元件頁面層級 | `number` | `10` |
| tabbarHeight | 底部導航欄高度（不包含安全區高度） | `number` | `-` |
| icon | 設定按鈕圖示 | ReactNode | `-` |
| onClick | 按鈕點擊時觸發事件 | Function | `-` |

## HoverButton.Item

### Props

| 屬性 | 描述 | 型別 | 點預設值 |
| --- | --- | --- | --- |
| icon | 設定按鈕圖示 | `ReactNode` | `-` |
| onClick | 按鈕點擊時觸發事件 | `Function` | `-` |

## 主題客製

### 樣式變數

元件提供了下列 CSS 变量，可用於自訂樣式，使用方法請參考 [ConfigProvider元件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 點預設值 |
| --- | --- | --- |
| \--nutui-hoverbutton-spacing | 按鈕垂直間距 | `16px` |
| \--nutui-hoverbutton-position-bottom | 按鈕區域距離螢幕底部距離 | `48px` |
| \--nutui-hoverbutton-position-right | 按鈕區域距離螢幕右側距離 | `16px` |
| \--nutui-hoverbutton-item-border-color | 按鈕邊框色 | `rgba(0, 0, 0, 0.06)` |
| \--nutui-hoverbutton-item-background | 按鈕背景色-正常態 | `#FFFFFF` |
| \--nutui-hoverbutton-item-background-active | 按鈕背景色-點擊態 | `#F6F6F6` |
| \--nutui-hoverbutton-item-icon-color | 圖標色-正常態 | `#1A1A1A` |
| \--nutui-hoverbutton-item-icon-color-active | 圖標色-點擊態 | `#595959` |
