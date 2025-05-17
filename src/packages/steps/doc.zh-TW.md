# Steps 步驟條

拆分展示某項流程的步驟，引導用戶按流程完成任務或嚮用戶展示當前狀態。

## 引入

```tsx
import { Steps } from '@nutui/nutui-react'
```

## 示例代碼

### 橫版左右布局1行文案

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 橫版左右布局2行文案

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 橫版左右布局icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 橫版上下布局點狀、icon、文案

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 橫向上下布局混合：點狀 + icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 橫向自定義icon

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義步驟條

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 豎向點狀

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 豎向混合：點狀 + icon

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Steps

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 步驟條的顯示方嚮 | `horizontal` \| `vertical` | `horizontal` |
| value | 當前所在的步驟 | `number` | `0` |
| status | 步驟條的展示狀態 | `default` \| `business` \| `dynamic` \| `enhanced` | `default` |
| type | 步驟條的類型 | `text` \| `dot` \| `icon` | `text` |
| layout | 步驟條的布局方式 | `single` \| `double` | `single` |
| icon | 自定義圖標 | `ReactNode` | `-` |
| onStepClick | 點擊切換步驟條時觸發 | `(index: number) => void` | `-` |

## Step

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 流程步驟的標題 | `ReactNode` | `-` |
| description | 流程步驟的描述性文字 | `ReactNode` | `-` |
| icon | 圖標 | `ReactNode` | `-` |
| value | 流程步驟的索引 | `number` | `0` |
| type | 步驟類型 | `text` \| `dot` \| `icon` | `text` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-steps-background-color | 步驟條背景色 | `$white` |
| \--nutui-steps-base-head-height | 頭部高度 | `14px` |
| \--nutui-steps-base-head-background-color | 頭部背景色 | `$color-background` |
| \--nutui-steps-base-head-border | 頭部邊框 | `none` |
| \--nutui-steps-base-head-text-size | 頭部文字大小 | `12px` |
| \--nutui-steps-base-head-size | 頭部圖標大小 | `$font-size-xxs` |
| \--nutui-steps-base-head-color | 頭部顏色 | `$color-text` |
| \--nutui-steps-base-head-dot-size | 頭部點狀大小 | `6px` |
| \--nutui-steps-base-head-dot-background-color | 頭部點狀背景色 | `$color-text-disabled` |
| \--nutui-steps-base-head-icon-size | 頭部圖標大小 | `16px` |
| \--nutui-steps-double-head-icon-size | 雙行頭部圖標大小 | `20px` |
| \--nutui-steps-vertical-head-icon-size | 垂直頭部圖標大小 | `20px` |
| \--nutui-steps-base-line-height | 分割線高度 | `1px` |
| \--nutui-steps-base-line-background | 分割線背景色 | `$color-border` |
| \--nutui-steps-base-title-font-size | 標題字號 | `$font-size-s` |
| \--nutui-steps-base-title-color | 標題顏色 | `$color-title` |
| \--nutui-steps-base-description-margin-top | 描述上邊距 | `2px` |
| \--nutui-steps-base-description-font-size | 描述字號 | `$font-size-xxs` |
| \--nutui-steps-base-description-color | 描述顏色 | `$color-text-help` |
| \--nutui-steps-base-head-border-color | 頭部邊框顏色 | `$color-border` |
| \--nutui-steps-process-head-background-color | 進行中頭部背景色 | `$color-primary` |
| \--nutui-steps-process-color | 進行中顏色 | `$white` |
| \--nutui-steps-process-title-color | 進行中標題顏色 | `$color-primary` |
| \--nutui-steps-process-description-color | 進行中描述顏色 | `$color-primary` |
| \--nutui-steps-wait-icon-color | 等待狀態圖標顏色 | `$color-text-help` |
| \--nutui-steps-wait-title-color | 等待狀態標題顏色 | `$color-title` |
| \--nutui-steps-wait-description-color | 等待狀態描述顏色 | `$color-text` |
| \--nutui-steps-finish-icon-color | 完成狀態圖標顏色 | `$color-text-help` |
| \--nutui-steps-business-title-color | 業務狀態標題顏色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-description-color | 業務狀態描述顏色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-text-color | 業務狀態頭部文字顏色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-dot-background-color | 業務狀態頭部點狀背景色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-icon-color | 業務狀態頭部圖標顏色 | `var(--nutui-color-service-pressed)` |
| \--nutui-steps-business-head-background-color | 業務狀態頭部背景色 | `var(--nutui-color-service)` |
| \--nutui-steps-enhanced-finish-head-background-color | 增強完成狀態頭部背景色 | `$color-primary-light-pressed` |
| \--nutui-steps-enhanced-finish-head-dot-background-color | 增強完成狀態頭部點狀背景色 | `$color-primary-disabled-special` |
| \--nutui-steps-enhanced-finish-head-icon-color | 增強完成狀態頭部圖標顏色 | `$color-primary-stop-1` |
| \--nutui-steps-enhanced-finish-head-text-color | 增強完成狀態頭部文字顏色 | `$color-primary-stop-1` |
| \--nutui-steps-horizontal-item-padding-right | 水平項右內邊距 | `28px` |
| \--nutui-steps-horizontal-item-line-padding | 水平項分割線內邊距 | `0 8px` |
| \--nutui-steps-horizontal-item-special-padding-right | 特殊水平項右內邊距 | `22px` |
| \--nutui-steps-horizontal-item-special-3-padding-right | 3項特殊水平項右內邊距 | `9px` |
| \--nutui-steps-vertical-item-padding-bottom | 垂直項下內邊距 | `13px` |
| \--nutui-steps-vertical-title-font-size | 垂直標題字號 | `$font-size-l` |
| \--nutui-steps-vertical-title-margin-bottom | 垂直標題下邊距 | `4px` |
| \--nutui-steps-vertical-line-height | 垂直行高 | `18px` |
| \--nutui-steps-vertical-description-font-size | 垂直描述字號 | `$font-size-base` |
| \--nutui-steps-vertical-description-margin | 垂直描述邊距 | `0 0 1px` |

<Contribution name="Steps" />
