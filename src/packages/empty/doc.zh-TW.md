# Empty組件

空狀態時的占位提示

## 引入

```tsx
import { Empty } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Size 為 small 時，可用於半屏

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義內容大小

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 圖片類型，內置 3 個

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義圖片

> 如果您是京東站內相關項目的開發，我們特意為您提供了一繫列的缺省狀態的圖片鏈接，您可通過內部群獲取。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 底部內容

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義操作

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Empty

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| image | 圖片,支持傳入圖片 URL | `ReactNode` | `-` |
| imageSize | 圖片大小，number 類型單位為 px | `number` \| `string` | `-` |
| title | 圖片下方的標題 | `ReactNode` | `-` |
| description | 圖片下方的描述文字 | `ReactNode` | `-` |
| size | 組件整體大小，適配於全屏或半屏 | `small` \| `base` | `base` |
| status | 默認圖片錯誤類型 | `empty` \| `error` \| `network` | `empty` |
| actions | 可用於處理操作的一組數據 | `Array<EmptyAction>` | `[]` |

### EmptyAction

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 文本 | `ReactNode` | `-` |
| className | Button 組件的類名 | `string` | `-` |
| style | Button 組件的 style | `CSSProperties` | `-` |
| type | Button 組件的 type | `ButtonType` | `-` |
| size | Button 組件的 size | `ButtonSize` | `-` |
| fill | Button 組件的 fill 屬性 | `ButtonFill` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| onClick | Button 組件的 onClick | `() => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty組件圖片的padding值 | `32px 40px` |
| \--nutui-empty-image-size | Empty組件圖片的尺寸大小 | `160px` |
| \--nutui-empty-image-small-size | size 為 small 時，Empty組件圖片的尺寸大小 | `120px` |
| \--nutui-empty-title-margin-top | Empty組件圖片標題margin-top的值 | `0px` |
| \--nutui-empty-title-margin-top | Empty組件圖片標題margin-top的值 | `8px` |
| \--nutui-empty-title-line-height | Empty組件圖片標題行高 | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty組件圖片描述margin-top的值 | `4px` |
| \--nutui-empty-background-color | Empty組件背景色 | `#fff` |
