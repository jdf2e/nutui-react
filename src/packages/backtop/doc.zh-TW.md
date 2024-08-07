# BackTop 返回頂部

提供較長的頁面快捷返回頂部功能。

## 引入

```tsx
import { BackTop } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 設置出現位置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義樣式

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 父級元素內滾動

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### click事件

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## BackTop

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| target | 獲取監聽的目標元素 | `string` | `-` |
| threshold | 頁面垂直滾動多高後出現 | `number` | `200` |
| zIndex | 設置組件頁面層級 | `number` | `900` |
| duration | 設置動畫持續時間，為 0 時表示無動畫 | `number` | `1000` |
| onClick | 按鈕點擊時觸發事件 | `(event: MouseEvent) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-backtop-border-color | 邊框顏色 | `#e0e0e0` |
