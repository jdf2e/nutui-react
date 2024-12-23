# Segmented 组件

用於帶頁面類型區分的內容型卡片切換，如主圖視頻、圖文切換。

## 引入

```tsx
import { Segmented } from '@nutui/nutui-react'
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

### 圖標

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Segmented

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 目前選取的值 | `string \| number` | `-` |
| defaultValue | 預設值 | `string \| number` | `-` |
| options | 選項內容 | `string[] \| number[]\| SegmentedItem[]` | `-` |
| onChange | 選項變化時的回調函數 | `(value: string \| number) => void` | `-` |

### SegmentedItem

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| label | 分段項目的顯示文字 | `ReactNode` | `-` |
| value | 分段項的值 | `string \| number` | `-` |
| disabled | 分段項目的禁用狀態 | `boolean` | `false` |
| icon | 分段項目的顯示圖標 | `ReactNode` | `-` |
| className | 自訂類別名 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-segmented-padding | 分段選擇器內邊距 | `$spacing-xxxs` |
| \--nutui-segmented-radius | 分段選擇器圓角 | `$radius-xs` |
| \--nutui-segmented-background | 分段選擇器背景色 | `$color-mask-part` |
| \--nutui-segmented-item-padding | 分段選擇器選項內邊距 | `$spacing-xxs $spacing-xs` |
| \--nutui-segmented-item-radius | 分段選擇器選項圓角 | `$spacing-xxs $spacing-xs` |
| \--nutui-segmented-item-fontsize | 分段選擇器選項字號 | `$font-size-s` |
| \--nutui-segmented-item-color | 分段選擇器選項文字顏色 | `$color-primary-text` |
| \--nutui-segmented-active-background | 分段選擇器選項選取的背景顏色 | `$color-mask-part` |
| \--nutui-segmented-icon-margin-right | 分段選擇器選項選間距 | `$color-mask-part` |
