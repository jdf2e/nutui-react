# Rate 評分

用於快速的評級操作，或對評價進行展示。

## 引入

```tsx
import { Rate } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 半星

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義 icon

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義數量

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 最少選中數量（支持半星）

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 禁用狀態

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 只讀狀態

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 綁定事件

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 滑動選擇

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 滑動事件

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Rate

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 非受控的 star 默認值 | `number` | `0` |
| value | 受控的 star 數值 | `number` | `0` |
| count | star 總數 | `number` | `5` |
| min | 最少選中star數量 | `number` | `0` |
| uncheckedIcon | 使用圖標(未選中) | `ReactNode` | `star-n` |
| checkedIcon | 使用圖標(選中) | `ReactNode` | `star-n` |
| allowHalf | 是否半星 | `boolean` | `false` |
| readOnly | 是否只讀 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| touchable | 是否允許滑動選擇 ｜ `boolean` | `false` |
| onChange | 當前 star 數修改時觸發 | `(value: number) => void` | `-` |
| onTouchEnd | touch 滑動結束時觸發 | `(event: TouchEvent, value: number) => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-rate-item-margin | 間距 | `14px` |
| \--nutui-rate-icon-color | icon 激活顏色 | `$color-primary` |
| \--nutui-rate-icon-inactive-color | icon 未激活顏色 | `$color-text-disabled` |
