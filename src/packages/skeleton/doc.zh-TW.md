# Skeleton 骨架屏組件

在頁面上待加載區域填充灰色的佔位圖，本質上是界面加載過程中的過渡效果。

## 引入

```tsx
import { Skeleton } from '@nutui/nutui-react'
```

## 示例代碼

### 标题

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 正文

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 模擬頭像

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 標題段落

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 顯示子組件

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否顯示骨架屏(true不顯示骨架屏，false顯示骨架屏) | `boolean` | `true` |
| animated | 是否開啟骨架屏動畫 | `boolean` | `false` |
| size | 指定使用的內置高度 | `'small' \| 'normal' \| 'large'` | `normal` |
| shape | 設置形狀 | `'square' \| 'round' \| 'circle'` | `round` |
| duration | 動畫時長 | `number` | `0.6` |
| rows | 設置行數 | `number` | `1` |
| width | 設置寬度，優先級高於 `size` 屬性 | `string\|number` | `-` |
| height | 設置高度，優先級高於 `size` 屬性 | `string\|number` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-skeleton-background | 背景 | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | 線條寬度 | `100%` |
| \--nutui-skeleton-line-small-height | 線條高度 | `16px` |
| \--nutui-skeleton-line-normal-height | 線條高度 | `24px` |
| \--nutui-skeleton-line-large-height | 線條高度 | `32px` |
| \--nutui-skeleton-line-border-radius | 線條邊框圓角 | `4px` |

<Contribution name="Skeleton" />
