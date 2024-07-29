# Steps 步驟條

拆分展示某項流程的步驟，引導用戶按流程完成任務或嚮用戶展示當前狀態。

## 引入

```tsx
import { Steps } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 基礎用法：點狀

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 標題和描述信息

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義步驟條

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義步驟條：點狀

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義步驟條：點狀 + icon

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義圖標

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 豎嚮步驟條

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 點狀步驟和垂直方嚮

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Steps

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 顯示方嚮 | `horizontal` \| `vertical` | `horizontal` |
| value | 當前所在的步驟 | `number` | `0` |
| dot | 點狀步驟條 | `boolean` | `false` |

## Step

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 流程步驟的標題 | `string` | `-` |
| description | 流程步驟的描述性文字 | `string` | `-` |
| icon | 圖標(來自Icon組件的name屬性) | `ReactNode` | `-` |
| value | 流程步驟的索引 | `number` | `0` |
| description | 流程步驟的描述性文字的html結構 | `React.ReactNode` | `-` |
| onStepClick | 點擊步驟的標題或圖標時觸發 | `(index: number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-steps-base-icon-width | icon 容器的寬度 | `25px` |
| \--nutui-steps-base-icon-height | icon 容器的高度 | `25px` |
| \--nutui-steps-base-icon-line-height | icon 容器的行高 | `25px` |
| \--nutui-steps-base-icon-margin-bottom | icon 容器的底部外邊距 | `12px` |
| \--nutui-steps-base-icon-font-size | icon 容器的字號 | `$font-size-small` |
| \--nutui-steps-base-line-width | 分割線的寬度 | `100%` |
| \--nutui-steps-base-line-background | 分割線的背景色 | `$color-text-help` |
| \--nutui-steps-base-title-font-size | 標題的字號 | `$font-size-base` |
| \--nutui-steps-base-title-color | 標題的顏色 | `$color-title` |
| \--nutui-steps-base-title-margin-bottom | 標題底部外邊距 | `10px` |
| \--nutui-steps-base-description-font-size | 描述文案的字號 | `$font-size-small` |
| \--nutui-steps-base-description-color | 描述文案的字體顏色 | `$color-text` |
| \--nutui-steps-wait-icon-bg-color | 等待狀態的 icon 容器的背景色 | `$color-text-help` |
| \--nutui-steps-wait-icon-color | 等待狀態的 icon 容器的字體顏色 | `$white` |
| \--nutui-steps-wait-title-color | 等待狀態標題字體顏色 | `$color-title` |
| \--nutui-steps-wait-description-color | 等待狀態描述字體顏色 | `$color-text` |
| \--nutui-steps-process-icon-bg-color | 進行中icon容器背景色 | `$color-primary` |
| \--nutui-steps-process-icon-color | 進行中icon容器字體顏色 | `$white` |
| \--nutui-steps-process-title-color | 進行中標題字體顏色 | `$color-primary` |
| \--nutui-steps-process-title-font-size | 進行中標題字號 | `$font-size-base` |
| \--nutui-steps-process-title-font-weight | 進行中標題字重 | `$font-weight-bold` |
| \--nutui-steps-process-description-color | 進行中描述字體顏色 | `$color-text` |
| \--nutui-steps-finish-icon-bg-color | 完成狀態icon 容器的背景色 | `$color-primary-text` |
| \--nutui-steps-finish-icon-color | 完成狀態icon 容器的字體顏色 | `$color-primary` |
| \--nutui-steps-finish-title-color | 完成狀態標題的字體顏色 | `$color-primary` |
| \--nutui-steps-finish-description-color | 完成狀態描述的字體顏色 | `$color-text` |
| \--nutui-steps-finish-line-background | 完成狀態分割線的顏色 | `$color-primary` |
| \--nutui-steps-dot-icon-width | 點狀進度條點的寬度 | `6px` |
| \--nutui-steps-dot-icon-height | 點狀進度條點的高度 | `6px` |
| \--nutui-steps-dot-icon-border | 點狀進度條點的邊框 | `2px solid $white` |
| \--nutui-steps-dot-head-margin | 點狀進度條點的外邊距 | `7px 0 0 0` |
| \--nutui-steps-process-icon-before-bg-color | 進行中點狀進度條點的外邊顏色 | `$color-primary-stop-2` |
