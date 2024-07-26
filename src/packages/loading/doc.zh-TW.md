# Loading 加載中

#

加載圖標，用於顯示正在加載中的狀態

### 引入

```tsx
import { Loading } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義大小

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 帶文字

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 帶文字(豎向排列)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義文字顏色和大小

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義圖標

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 與遮罩層結合

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Loading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | loading图标的样式 | `circular \| spinner` | `circular` |
| direction | loading图标和文字的排列方式 | `horizontal \| vertical` | `horizontal` |
| icon | 自定义loading的图标 | `tsx.Element` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-loading-icon-color | icon色值 | `$color-text-help` |
| \--nutui-loading-icon-size | icon大小 | `$font-size-small` |
| \--nutui-loading-color | 文本色值 | `$color-text-help` |
| \--nutui-loading-font-size | 文本字號 | `$font-size-small` |
