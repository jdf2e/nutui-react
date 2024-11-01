# Divider 分割線

用於將內容分隔為多個區域。

## 引入

```tsx
import { Divider } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

默認渲染一條水平分割線。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 展示文本

通過插槽在可以分割線中間插入內容。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 內容位置

通過 contentPosition 指定內容所在位置。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 虛線

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義樣式

可以直接通過 style 屬性設置分割線的樣式。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 垂直分割線

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Divider

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| contentPosition | 內容位置 | `left` \| `center` \| `right` | `center` |
| direction | 水平還是垂直類型 | `horizontal` \| `vertical` | `horizontal` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-divider-margin | 分割線整體內容的margin值 | `16px 0` |
| \--nutui-divider-border-color | 分割線的邊框色值 | `$color-border` |
| \--nutui-divider-text-font-size | 分割線整體內容的font-size大小 | `$font-size-base` |
| \--nutui-divider-text-color | 分割線整體內容的顏色 | `$color-title` |
| \--nutui-divider-line-height | 分割線的行高 | `2px` |
| \--nutui-divider-spacing | 左邊分割線與文案的間隔值 | `8px` |
| \--nutui-divider-vertical-height | 垂直分割線的高度 | `12px` |
| \--nutui-divider-vertical-margin | 垂直分割線的margin值 | `0 8px` |
