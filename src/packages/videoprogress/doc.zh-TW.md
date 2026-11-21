# VideoProgress 視頻進度條

用於視頻播放器場景的進度條組件，支持手勢拖拽尋道、播放/暫停狀態指示與自定義圖標。

## 引入

```tsx
import { VideoProgress } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法 (靜態播放)

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 暫停狀態與自定義圖標

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 手勢拖拽尋道

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## VideoProgress

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| percent | 進度百分比 (0-100) | `number` | `0` |
| status | 播放狀態: `static` 播放中, `paused` 暫停 | `static` \| `paused` | `static` |
| draggable | 是否允許拖動滑塊調整進度 | `boolean` | `false` |
| showThumb | 是否顯示滑塊 | `boolean` | `true` |
| pausedIcon | 暫停狀態下展示在滑塊中央的自定義圖標 | `ReactNode` | `-` |
| min | 進度最小值 | `number` | `0` |
| max | 進度最大值 | `number` | `100` |
| step | 拖動步長 | `number` | `-` |
| onChange | 進度值變化時的回調 (拖動中連續觸發) | `(percent: number) => void` | `-` |
| onDragStart | 拖動開始回調 | `(percent: number) => void` | `-` |
| onDragging | 拖動中回調 | `(percent: number) => void` | `-` |
| onDragEnd | 拖動結束回調 | `(percent: number) => void` | `-` |
| ariaLabel | 無障礙標籤 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-progress-video-track-color | 軌道底色 | `rgba(255, 255, 255, 0.2)` |
| \--nutui-progress-video-fill-color | 已填充色 | `rgba(255, 255, 255, 0.7)` |
| \--nutui-progress-video-thumb-color | 滑塊顏色 | `#ffffff` |
| \--nutui-progress-video-height | 軌道高度 | `1px` |
| \--nutui-progress-video-active-height | 拖動態軌道高度 | `8px` |
| \--nutui-progress-video-paused-height | 暫停態軌道高度 | `3px` |
| \--nutui-progress-video-thumb-width | 滑塊寬度 | `2px` |
| \--nutui-progress-video-thumb-height | 滑塊高度 | `1px` |
| \--nutui-progress-video-thumb-radius | 滑塊圓角 | `0.5px` |
| \--nutui-progress-video-thumb-active-width | 拖動態滑塊寬度 | `6px` |
| \--nutui-progress-video-thumb-active-height | 拖動態滑塊高度 | `12px` |
| \--nutui-progress-video-thumb-active-radius | 拖動態滑塊圓角 | `3px` |
| \--nutui-progress-video-thumb-paused-width | 暫停態滑塊寬度 | `6px` |
| \--nutui-progress-video-thumb-paused-height | 暫停態滑塊高度 | `3px` |
| \--nutui-progress-video-thumb-paused-radius | 暫停態滑塊圓角 | `1.5px` |
| \--nutui-progress-video-opacity-static | 默認（靜態）態整體透明度 | `0.6` |
| \--nutui-progress-video-opacity-paused | 暫停態整體透明度 | `0.85` |
| \--nutui-progress-video-container-height | 容器觸控響應區高度 | `68px` |
