# CountDown 倒計時

用於實時展示倒計時數值，支持毫秒精度。

## 引入

```tsx
import { CountDown } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 剩余時間用法

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義格式

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 毫秒級渲染

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 以服務端的時間為準

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 異步更新結束時間

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 控製開始和暫停的倒計時

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定義展示

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 手動控製

通過 ref 獲取到組件實例後，可以調用 start、pause、reset 方法。在使用手動控製時，通過 time 屬性實現倒計時總時長，單位為毫秒。startTime、endTime 屬性失效。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## CountDown

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| startTime | 開始時間 | `number` | `Date.now()` |
| endTime | 結束時間 | `number` | `Date.now()` |
| remainingTime | 剩余時間，單位是毫秒 | `number` | `0` |
| paused | 是否暫停 | `boolean` | `false` |
| format | 時間格式 | `string` | `HH:mm:ss` |
| millisecond | 是否開啟毫秒級渲染 | `boolean` | `false` |
| autoStart | 是否自動開始倒計時 | `boolean` | `true` |
| time | 倒計時顯示時間，單位是毫秒。autoStart 為 false 時生效 | `number` | `0` |
| destroy | 銷毀實例 | `boolean` | `false` |
| onEnd | 倒計時結束時回調函數 | `無` | `-` |
| onPaused | 暫停倒計時回調函數 | `onPaused: (restTime: number) => void` | `-` |
| onRestart | 重新開始倒計時回調函數 | `onRestart: (restTime: number) => void` | `-` |
| onUpdate | 自定義展示內容時，實時更新倒計時數據回調函數 | `onUpdate: (restTime: any) => void` | `-` |

### format 格式

| 格式 | 說明 |
| --- | --- |
| DD | 天數 |
| HH | 小時 |
| mm | 分鐘 |
| ss | 秒數 |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| start | 開始倒計時 | `() => void` |
| pause | 暫停倒計時 | `() => void` |
| reset | 重設倒計時，若 auto-start 為 true，重設後會自動開始倒計時 | `() => void` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-countdown-display | 倒計時的布局方式 | `flex` |
| \--nutui-countdown-color | 倒計時的文字顏色 | `$color-title` |
| \--nutui-countdown-font-size | 倒計時的字體大小 | `14px` |
