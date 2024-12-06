# Switch 開關

用來打開或關閉選項。

## 引入

```tsx
import { Switch } from '@nutui/nutui-react'
```

## 示例代碼

### 非受控

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 禁用狀態

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 支持文字

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 支持 Icon

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### onChange事件

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Switch

### Props

| 屬性 | 説明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultChecked | 開關狀態，非受控 | `boolean` | `false` |
| checked | 開關狀態，受控 | `boolean` | `false` |
| disabled | 禁用狀態 | `boolean` | `false` |
| activeText | 打開時文字描述 | `ReactNode` | `-` |
| inactiveText | 關閉時文字描述 | `ReactNode` | `-` |
| onChange | 切換開關時觸發 | `onChange:(value: boolean, event: Event)` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 説明 | 默認值 |
| --- | --- | --- |
| \--nutui-switch-active-background-color | 開關打開狀態背景顏色 | `$color-primary` |
| \--nutui-switch-inactive-background-color | 開關關閉狀態背景顏色 | `$color-text-disabled` |
| \--nutui-switch-active-disabled-background-color | 開關打開狀態禁用的背景顏色 | `$color-primary-disabled-special` |
| \--nutui-switch-inactive-disabled-background-color | 開關關閉狀態禁用的背景顏色 | `$color-background` |
| \--nutui-switch-inactive-line-bg-color | 開關關閉狀態內部按鈕線條顏色 | `#ffffff` |
| \--nutui-switch-width | 開關寬度 | `46px` |
| \--nutui-switch-height | 開關高度 | `28px` |
| \--nutui-switch-line-height | 開關行高 | `28px` |
| \--nutui-switch-border-radius | 開關圓角大小 | `$radius-circle` |
| \--nutui-switch-border-width | 開關邊框寬度 | `2px` |
| \--nutui-switch-inside-border-radius | 開關內部按鈕圓角大小 | `$radius-full` |
| \--nutui-switch-inside-box-shadow | 開關內部按鈕陰影 | `0px 2px 6px 0px rgba(0, 0, 0, 0.4)` |
| \--nutui-switch-label-text-color | 開關內部文字顏色 | `$color-primary-text` |
| \--nutui-switch-label-font-size | 開關內部文字大小 | `$font-size-s` |
| \--nutui-switch-inactive-disabled-label-text-color | 開關關閉禁用內部文字顏色 | `$color-text-disabled` |
