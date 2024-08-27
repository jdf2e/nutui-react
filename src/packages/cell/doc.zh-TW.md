# Cell 單元格

列表項，可組成列表。

## 引入

```tsx
import { Cell } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義標題區域

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義右側區域

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 垂直居中

通過 `align` 屬性可以讓 Cell 的左右內容都垂直居中。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 鏈接 | 分組用法

使用 `nut-cell-group` 支持 `title` 和 `description`

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 分組用法

通過 `divider` 屬性可以讓單元格之間不顯示下邊線。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Cell.Group

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 分組標題 | `ReactNode` | `-` |
| description | 分組描述 | `ReactNode` | `-` |
| divider | 單元格之間是否有分割線 | `boolean` | `true` |

## Cell

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | `ReactNode` | `-` |
| description | 描述 | `ReactNode` | `-` |
| extra | 右側描述 | `ReactNode` | `-` |
| radius | 圓角半徑 | `string` | `6px` |
| align | 縱軸方向上的對齊方式 | `flex-start` \| `center` \| `flex-end` | `flex-start` |
| clickable | 點擊的樣式反饋 | `boolean` | `false` |
| onClick | 點擊事件 | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-cell-title-color | 單元格標題字體顏色 | `$color-title` |
| \--nutui-cell-title-font-size | 單元格標題字體大小 | `$font-size-base` |
| \--nutui-cell-description-color | 單元格描述字體顏色 | `$color-text` |
| \--nutui-cell-description-font-size | 單元格描述字體大小 | `$font-size-small` |
| \--nutui-cell-extra-color | 單元格右側描述字體顏色 | `$color-text` |
| \--nutui-cell-extra-font-size | 單元格右側描述字體大小 | `$font-size-base` |
| \--nutui-cell-border-radius | 單元格圓角大小 | `6px` |
| \--nutui-cell-padding | 單元格內邊距 | `13px 16px` |
| \--nutui-cell-line-height | 單元格行高 | `20px` |
| \--nutui-cell-divider-left | 單元格分割線左邊距 | `16px` |
| \--nutui-cell-divider-right | 單元格分割線右邊距 | `16px` |
| \--nutui-cell-divider-border-bottom | 單元格分割線下邊框 | `2px solid #f5f6f7` |
| \--nutui-cell-background-color | 單元格背景顏色 | `$white` |
| \--nutui-cell-box-shadow | 單元格陰影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | 單元格分組的標題內邊距 | `0 10px` |
| \--nutui-cell-group-title-color | 單元格分組的標題字體顏色 | `#909ca4` |
| \--nutui-cell-group-title-font-size | 單元格分組的標題字體大小 | `$font-size-base` |
| \--nutui-cell-group-title-line-height | 單元格分組的標題行高 | `20px` |
| \--nutui-cell-group-description-padding | 單元格分組的描述內邊距 | `0 10px` |
| \--nutui-cell-group-description-color | 單元格分組的描述顏色 | `#909ca4` |
| \--nutui-cell-group-description-font-size | 單元格分組的描述字體大小 | `$font-size-small` |
| \--nutui-cell-group-description-line-height | 單元格分組的描述行高 | `16px` |
| \--nutui-cell-group-background-color | 單元格分組的背景顏色 | `$white` |
| \--nutui-cell-group-wrap-margin | 單元格分組容器的外邊距 | `10px 0` |
