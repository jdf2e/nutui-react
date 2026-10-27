# Progress 進度條

展示操作或任務的當前進度。

## 引入

```tsx
import { Progress } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 設置顏色與寬度

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 顯示百分比

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義顯示內容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義尺寸

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 狀態顯示

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 動態改變

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 延遲加載數據

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 設置動畫時長與播放方式

:::demo
<CodeBlock src='h5/demo9.tsx'></CodeBlock>
:::

### 視頻進度條

用於視頻播放器等沉浸式場景。默認色值：軌道 `rgba(255,255,255,0.2)`、已填充 `rgba(255,255,255,0.7)`、滑塊 `#FFFFFF`。演示包含三種狀態：默認（靜態，弱化顯示）、視頻暫停（中等強度，配合播放 icon）、拖動（突出顯示、滑塊變大）。

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Progress

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | `0` |
| color | 進度條線條顏色 | `string` | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| background | 進度條背景顏色 | `string` | `#f3f3f3` |
| strokeWidth | 進度條寬度 | `string` | `-` |
| showText | 是否顯示文字內容 | `boolean` | `false` |
| animated | 是否展示動畫效果 | `boolean` | `false` |
| lazy | 每次進入可視區展示進度條動畫 | `boolean` | `false` |
| delay | 延遲數據加載時長，單位 ms | `number` | `0` |
| borderRadius | 進度條圓角大小 | `string` | `0` |
| fontSize | 進度文字大小 | `string` | `12px` |
| activeMode | 動畫播放方式 | `forwards \| backwards` | `forwards` |
| duration | 動畫完成時間（單位：毫秒） | `number` | `30` |
| ariaLabel | 無障礙標簽 | `string` | `-` |
| onActiveEnd | 動畫完成後的回調函數 | `() => void` | `-` |
| mode | 進度條形態，`video` 時啟用視頻播放器樣式 | `default \| video` | `default` |
| status | 視頻模式下的外部狀態（`static` 靜態 / `paused` 暫停），拖動態由組件內部推導 | `static \| paused` | `static` |
| draggable | 視頻模式下是否允許拖動改變進度 | `boolean` | `false` |
| showThumb | 視頻模式下是否顯示可拖動滑塊 | `boolean` | `true` |
| pausedIcon | `status='paused'` 時展示的播放/暫停圖標 | `ReactNode` | `-` |
| min | 進度值最小值 | `number` | `0` |
| max | 進度值最大值 | `number` | `100` |
| step | 拖動步長 | `number` | `-` |
| onChange | 拖動/點擊/鍵盤改變進度回調 | `(value: number) => void` | `-` |
| onDragStart | 拖動開始回調 | `(value: number) => void` | `-` |
| onDragging | 拖動進行中回調 | `(value: number) => void` | `-` |
| onDragEnd | 拖動結束回調 | `(value: number) => void` | `-` |

> 註：`mode='video'` 時 `color / background / strokeWidth` 屬性不生效，請通過下方的 CSS 變量或 `pausedIcon` 插槽定制外觀。

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-progress-height | 進度條寬度 | `10px` |
| \--nutui-progress-border-radius | 進度條邊框圓角 | `12px` |
| \--nutui-progress-color | 進度條顏色 | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| \--nutui-progress-background | 進度條背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本顏色 | `$color-text-help` |
| \--nutui-progress-text-padding | 文本內邊距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字體大小 | `13px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本邊框圓角 | `5px` |
| \--nutui-progress-text-background | 文本背景顏色 | `$progress-color` |
| \--nutui-progress-video-track-color | 視頻模式軌道底色 | `rgba(255, 255, 255, 0.2)` |
| \--nutui-progress-video-fill-color | 視頻模式已填充色 | `rgba(255, 255, 255, 0.7)` |
| \--nutui-progress-video-thumb-color | 視頻模式滑塊顏色 | `#ffffff` |
| \--nutui-progress-video-height | 視頻模式軌道高度 | `1px` |
| \--nutui-progress-video-active-height | 拖動態軌道高度 | `8px` |
| \--nutui-progress-video-paused-height | 暫停態軌道高度 | `3px` |
| \--nutui-progress-video-thumb-width | 視頻模式滑塊寬度 | `2px` |
| \--nutui-progress-video-thumb-height | 視頻模式滑塊高度 | `1px` |
| \--nutui-progress-video-thumb-radius | 視頻模式滑塊圓角 | `0.5px` |
| \--nutui-progress-video-thumb-active-width | 拖動態滑塊寬度 | `6px` |
| \--nutui-progress-video-thumb-active-height | 拖動態滑塊高度 | `12px` |
| \--nutui-progress-video-thumb-active-radius | 拖動態滑塊圓角 | `3px` |
| \--nutui-progress-video-thumb-paused-width | 暫停態滑塊寬度 | `6px` |
| \--nutui-progress-video-thumb-paused-height | 暫停態滑塊高度 | `3px` |
| \--nutui-progress-video-thumb-paused-radius | 暫停態滑塊圓角 | `1.5px` |
| \--nutui-progress-video-opacity-static | 默認（靜態）態整體透明度 | `0.6` |
| \--nutui-progress-video-opacity-paused | 暫停態整體透明度 | `0.85` |

<Contribution name="Progress" />
