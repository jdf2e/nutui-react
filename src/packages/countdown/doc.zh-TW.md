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

### 百毫秒 / 毫秒級渲染

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
| type | 展示類型 | `default`\|`primary`\|`text` | `default` |
| startTime | 開始時間 | `number` | `Date.now()` |
| endTime | 結束時間 | `number` | `Date.now()` |
| remainingTime | 剩余時間，單位是毫秒 | `number` | `0` |
| paused | 是否暫停 | `boolean` | `false` |
| format | 時間格式 | `string` | `HH:mm:ss` |
| refreshInterval | 刷新步長（毫秒）；傳入則依該值取整節流，不傳則依 format 最細單位 | `number` | `-` |
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
| i | 百毫秒（1位，0–9）；與 `ss` 連寫如 `ss.i` 時同塊展示（如 `30.5`） |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### 推薦格式（文檔約定，組件不強制按時長自動切換）

`format` 仍完全自定義。以下為設計規範推薦，按剩餘時長自行選擇：

| 剩餘時長 | 推薦 format | 說明 |
| --- | --- | --- |
| ≥ 1 天 | `DD天HH:mm:ss` | 建議 `type="text"`（文本標） |
| 1～24 小時 | `HH:mm:ss` 或 `HH:mm:ss.i` | 面性/線性標均可 |
| < 1 小時 | `mm:ss` 或 `mm:ss.i` | 面性/線性標均可 |

百毫秒（`i`）僅建議在 24 小時內、強促銷等場景使用；展示為 1 位數字（由 RAF 驅動刷新）。

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
| \--nutui-countdown-display | 倒計時的佈局方式 | `flex` |
| \--nutui-countdown-color | 倒計時的文字顏色 | `$color-primary` |
| \--nutui-countdown-font-size | 倒計時字體大小（非 text） | `11px` |
| \--nutui-countdown-font-size-text | `type="text"` 時字體大小 | `10px` |
| \--nutui-countdown-font-weight | 倒計時的字體粗細 | `400` |
| \--nutui-countdown-width | 倒計時的時間區域最小寬度 | `16px` |
| \--nutui-countdown-number-ssi-min-width | `ss.i` 同塊（含百毫秒）最小寬度；僅 default / primary，text 不限制 | `25px` |
| \--nutui-countdown-height | 倒計時的時間區域高度（含邊框） | `16px` |
| \--nutui-countdown-number-padding | 倒計時的時間區域 padding | `1px` |
| \--nutui-countdown-number-border-width | 數字塊 `::after` 物理描邊寬度（再 `scale(1/3)`，視覺約 0.33px） | `1px` |
| \--nutui-countdown-number-margin | 倒計時的時間區域margin | `0 1px` |
| \--nutui-countdown-number-border-radius | 倒計時的時間區域圓角大小 | `2px` |
| \--nutui-countdown-number-color | 倒計時的時間區域的文字顏色 | `$color-primary` |
| \--nutui-countdown-background-color | 倒計時的時間區域的背景顏色 | `$color-background-overlay` |
| \--nutui-countdown-number-border-color | 空心（線性）數字塊邊框色 | `$color-primary-disabled-special` |
| \--nutui-countdown-number-primary-color | type爲`primary`時，倒計時的時間區域的文字顏色 | `$color-primary-text` |
| \--nutui-countdown-primary-background-color | type爲`primary`時，倒計時的時間區域的背景顏色 | `$color-primary` |
| \--nutui-countdown-primary-border-color | type爲`primary`時，倒計時的時間區域的邊框顏色顏色 | `$color-primary` |

<Contribution name="CountDown" />
