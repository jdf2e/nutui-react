# Notify 消息通知

#

在頁面頂部展示消息提示

### 引入

```tsx
import { Notify } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 通知類型

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義樣式

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義時長

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Notify

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 提示的信息類型（primary，success ，danger，warning） | `string` | `danger` |
| duration | 展示時長(ms)，值為 0 時，notify 不會消失 | `string` | `3000` |
| position | 自定義位置 (top, bottom) | `string` | `top` |
| onClick | 點擊事件回調 | `onClick: () => void` | `-` |
| onClose | 關閉事件回調 | `onClose: () => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-notify-height | 消息通知的高度 | `40px` |
| \--nutui-notify-padding | 消息通知的內邊距 | `0 10px` |
| \--nutui-notify-font-size | 消息通知的字體大小 | `$font-size-base` |
| \--nutui-notify-text-color | 消息通知的文本顏色 | `$white` |
| \--nutui-notify-base-background-color | 消息通知的背景顏色 | `$color-primary-gradient-1` |
| \--nutui-notify-primary-background-color | 主要通知的背景顏色 | `$color-info` |
| \--nutui-notify-success-background-color | 成功通知的背景顏色 | `linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)` |
| \--nutui-notify-danger-background-color | 危險通知的背景顏色 | `$color-primary` |
| \--nutui-notify-warning-background-color | 警告通知的背景顏色 | `$color-warning` |
