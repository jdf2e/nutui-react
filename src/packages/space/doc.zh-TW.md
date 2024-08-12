# Space 間距

#

元素排列中保持相同的寬度。

### 引入

```tsx
import { Space } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 換行

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 垂直

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 間距大小

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 主軸對齊方式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 交叉軸對齊方式

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Space

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 間距方嚮 | `'vertical'｜ 'horizontal'` | `'horizontal'` |
| align | 交叉軸對齊方式 | `'start'｜'end'｜'center'｜'baseline'` | `-` |
| justify | 主軸對齊方式 | `'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch'` | `-` |
| wrap | 是否自動換行，僅在 horizontal 時有效 | `boolean` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 | 說明 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |
