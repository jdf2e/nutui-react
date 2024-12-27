# Badge 徽標

出現在圖標或文字右上角的紅色圓點、數字或者文字，錶示有新內容或者待處理的信息。

## 引入

```tsx
import { Badge } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 最大值

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義徽標內容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義徽標樣式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義位置

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 獨立展示

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 填充模式

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Badge

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 顯示的內容，支持數字、字符和自定義內容 | `ReactNode` | `-` |
| max | value 為數值時，最大值 | `number` | `99` |
| dot | 是否為小點，當`value`值為自定義內容時，dot不生效 | `boolean` | `false` |
| size | dot 尺寸，當 dot 等於 `true` 時生效 | `small` \| `normal` \| `large` | `large` |
| top | 上下偏移量，可設置為："0"或0 等 | `string` \| `number` | `0` |
| right | 左右偏移量，可設置為："0"或0 等 | `string` \| `number` | `0` |
| fill | 填充模式 | `solid` \| `outline` | `solid` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-badge-height | badge 的高度 | `14px` |
| \--nutui-badge-background-color | badge 背景色 | `$color-primary` |
| \--nutui-badge-color | badge 內容色值 | `$color-primary-text)` |
| \--nutui-badge-font-size | badge 內容字號 | `$font-size-xxs` |
| \--nutui-badge-border | badge 邊框 | `1px solid $color-primary-text` |
| \--nutui-badge-border-radius | badge 邊框圓角 | `14px` |
| \--nutui-badge-min-width | badge 最小寬度 | `6px` |
| \--nutui-badge-padding | badge 的padding值 | `1px 4px` |
| \--nutui-badge-icon-padding | badge 為自定義icon時 的 padding值 | `2px` |
| \--nutui-badge-icon-size | badge 為自定義icon時 的 size | `10px` |
| \--nutui-badge-content-transform | badge 內容位置 | `translate(50%, -50%)` |
| \--nutui-badge-z-index | badge 自定義icon時的z-index | `1` |
| \--nutui-badge-dot-width | badge 為圓點時，size 等於 normal 的寬高 | `6px` |
| \--nutui-badge-dot-small-width | badge 為圓點時，size 等於 small 的寬高 | `4px` |
| \--nutui-badge-dot-large-width | badge 為圓點時，size 等於 large 的寬高 | `8px` |
| \--nutui-badge-dot-border | badge 為圓點時的邊框 | `1px solid $color-primary-text` |
| \--nutui-badge-outline-color | badge 為 outline 文字色值 | `$color-primary` |
| \--nutui-badge-outline-border | badge 為 outline 填充模式時的邊框 | `1px solid $color-primary-text` |
