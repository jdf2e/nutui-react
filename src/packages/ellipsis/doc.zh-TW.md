# Ellipsis組件

展示空間不足時，隱去部分內容併用“...”替代。

## 引入

```tsx
import { Ellipsis } from '@nutui/nutui-react'
```

## 示例代碼

### 頭部省略

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 尾部省略

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 中間省略

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 多行省略

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 展開收起

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Ellipsis

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| content | 文本內容 | `string` | `-` |
| direction | 省略位置 | `start` \| `end` \| `middle` | `end` |
| rows | 展示幾行 | `number` | `1` |
| expandText | 展開操作的文案 | `string` | `-` |
| collapseText | 收起操作的文案 | `string` | `-` |
| symbol | 省略的符號 | `string` | `...` |
| lineHeight | 容器的行高 | `string` \| `number` | `20` |
| onClick | 文本點擊是觸發 | `() => void` | `-` |
| onChange | 點擊展開收起時觸發 | `(type: string) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按鈕顏色 | `#3460fa` |
