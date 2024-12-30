# Lottie 动画

加载 lottie 动画

### 引入

```tsx
import { Lottie } from '@nutui/nutui-react-taro'
```

## 示例代码

### 明亮模式

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 暗黑模式

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 反白模式

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

## Lottie

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 包含导出动画数据的 JSON 对象 | `Object` | `circular` |
| loop | loading图标和文字的排列方式 | `boolean \| number` | `horizontal` |
| autoPlay | 动画将在加载后立即播放 | `boolean` | `-` |
| initialSegment | 第一个值是初始帧，第二个值是最终帧。如果设置了该值，动画将从此时间位置开始 | `[number, number]` | `-` |
| speed | 播放速度 | `number` | `1` |

更多属性可以参考 [lottie-react](https://lottiereact.com/)

### Ref

通过 ref 可以获取到 Lottie 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| play | 播放 | `-` |
| stop | 停止 | `-` |
| pause | 暂停 | `-` |
| setSpeed | 设置播放速度 | `(speed: number) => void` |
| goToAndPlay | 跳转到指定帧并播放 | `(value: number, isFrame?: boolean) => void` |
| goToAndStop | 跳转到指定帧并停止 | `(value: number, isFrame?: boolean) => void` |
| setDirection | 播放的方向设置 | `(direction: AnimationDirection) => void` |
| playSegments | 播放区间帧 | `(segments: AnimationSegment \| AnimationSegment[], forceFlag?: boolean) => void` |
| destroy | 销毁 | `() => void` |
| getDuration | inFrames 如果为真，则以帧为单位返回持续时间；inFrames 如果为假，则以秒为单位返回。 | `(inFrames?: boolean) => number` |

详细可以参考 [https://lottiereact.com/](https://lottiereact.com/)

| 方法名 | 说明 | 参数 |
