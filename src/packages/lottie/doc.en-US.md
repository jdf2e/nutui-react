# Lottie

A loading icon, Used to show the loading state

### Import

```tsx
import { Lottie } from '@nutui/nutui-react'
```

## Demo

### Light

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Drak

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### White

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Lottie

### Props

| Property | Description | type | default |
| --- | --- | --- | --- |
| source | JSON object containing exported animation data | `Object` | `circular` |
| loop | The arrangement of loading icons and text | `boolean \| number` | `horizontal` |
| autoPlay | The animation will play immediately after loading | `boolean` | `-` |
| initialSegment | The first value is the initial frame and the second value is the final frame. If this value is set, the animation will start at this time position | `[number, number]` | `-` |
| speed | playback speed | `number` | `1` |

### Ref

| Method | Description | Parameter |
| --- | --- | --- |
| play | play | `-` |
| stop | stop | `-` |
| pause | pause | `-` |
| setSpeed | Set playback speed | `(speed: number) => void` |
| goToAndPlay | Jump to the specified frame and play | `(value: number, isFrame?: boolean) => void` |
| goToAndStop | Jump to the specified frame and stop | `(value: number, isFrame?: boolean) => void` |
| setDirection | Playback direction setting | `(direction: AnimationDirection) => void` |
| playSegments | Play interval frame | `(segments: AnimationSegment \| AnimationSegment[], forceFlag?: boolean) => void` |
| destroy | destroy | `() => void` |
| getDuration | inFrames If true, returns the duration in frames; inFrames if false, returns the duration in seconds. | `(inFrames?: boolean) => number` |
