# Lottie 動畫

載入 Lottie 動畫

### 引入

```tsx
import { Lottie } from '@nutui/nutui-react-taro'
```

## 示例代碼

### 明亮模式

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 暗黑模式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 反白模式

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Lottie

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| source | 包含导出动画数据的 JSON 对象 | `Object` | `circular` |
| loop | loading图标和文字的排列方式 | `boolean \| number` | `horizontal` |
| autoPlay | 动画将在加载后立即播放 | `boolean` | `-` |
| initialSegment | 第一个值是初始帧，第二个值是最终帧。如果设置了该值，动画将从此时间位置开始 | `[number, number]` | `-` |
| speed | 播放速度 | `number` | `1` |

### Ref

透過 ref 可以取得 Lottie 實例並呼叫實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| play | 播放 | `-` |
| stop | 停止 | `-` |
| pause | 暫停 | `-` |
| setSpeed | 設定播放速度 | `(speed: number) => void` |
| goToAndPlay | 跳到指定訊框並播放 | `(value: number, isFrame?: boolean) => void` |
| goToAndStop | 跳到指定訊框並停止 | `(value: number, isFrame?: boolean) => void` |
| setDirection | 播放的方向設定 | `(direction: AnimationDirection) => void` |
| playSegments | 播放區間訊框 | `(segments: AnimationSegment \| AnimationSegment[], forceFlag?: boolean) => void` |
| destroy | 銷毀 | `() => void` |
| getDuration | inFrames 若為真，則以幀為單位傳回持續時間；inFrames 若為假，則以秒為單位傳回。 | `(inFrames?: boolean) => number` |
