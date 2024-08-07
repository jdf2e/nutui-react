# Watermark 水印

頁面上添加特定的文字或圖案，可用於防止信息盜用。

## 引入

```tsx
import { WaterMark } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

包含單行文字、多行文字、支援圖片。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 局部用法

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## WaterMark

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| width | 水印的寬度 | `number` | `120` |
| height | 水印的高度 | `number` | `64` |
| rotate | 水印繪制時，旋轉的角度 | `number` | `-22` |
| image | 圖片源，建議導出 2 倍或 3 倍圖，優先使用圖片渲染水印 | `string` | `-` |
| imageWidth | 圖片寬度 | `number` | `120` |
| imageHeight | 圖片高度 | `number` | `64` |
| zIndex | 追加的水印元素的 z-index | `number` | `2000` |
| content | 水印文字內容 | `string` | `-` |
| color | 水印文字顏色 | `string` | `rgba(0, 0, 0, .15)` |
| fontSize | 文字大小 | `string` \| `number` | `16` |
| gapX | 水印之間的水平間距 | `number` | `24` |
| gapY | 水印之間的垂直間距 | `number` | `48` |
| startX | 水印之間的水平起點 | `number` | `0` |
| startY | 水印之間的垂直起點 | `number` | `0` |
| fullPage | 是否覆蓋整個頁面 | `boolean` | `true` |
| fontFamily | 水印文字字體 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-watermark-z-index | zIndex | `$mask-content-z-index` |
