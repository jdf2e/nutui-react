# Switch 開關

## 介紹

用來打開或關閉選項。

## 安裝

```tsx
import { Switch } from '@nutui/nutui-react';
```

## 代碼演示

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

### onChange事件

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 支持文字

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Switch

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultChecked | 開關狀態，非受控 | `boolean` | `false` |
| checked | 開關狀態，受控 | `boolean` | `false` |
| disabled | 禁用狀態 | `boolean` | `false` |
| activeText | 打開時文字描述 | `string` | `-` |
| inactiveText | 關閉時文字描述 | `string` | `-` |
| onChange | 切換開關時觸發 | `onChange:(value: boolean, event: Event)` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-switch-close-background-color | 開關關閉狀態背景顏色 | `$color-text-disabled` |
| \--nutui-switch-open-background-color | 開關打開狀態背景顏色 | `$color-primary` |
| \--nutui-switch-close-disabled-background-color | 開關關閉時的禁用時的背景顏色 | `$color-background` |
| \--nutui-switch-open-disabled-background-color | 開關打開時的禁用時的背景顏色 | `$color-primary-disabled` |
| \--nutui-switch-width | 開關寬度 | `40px` |
| \--nutui-switch-height | 開關高度 | `24px` |
| \--nutui-switch-line-height | 開關行高 | `24px` |
| \--nutui-switch-border-radius | 開關圓角大小 | `8px` |
| \--nutui-switch-inside-width | 開關內部按鈕寬度 | `20px` |
| \--nutui-switch-inside-height | 開關內部按鈕高度 | `20px` |
| \--nutui-switch-inside-open-transform | 開關打開狀態內部按鈕位置 | `translateX(18px)` |
| \--nutui-switch-inside-close-transform | 開關關閉狀態內部按鈕位置 | `translateX(2px)` |
| \--nutui-switch-close-line-bg-color | 開關關閉狀態內部按鈕線條顏色 | `#ffffff` |