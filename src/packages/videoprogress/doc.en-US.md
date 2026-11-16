# VideoProgress

A progress bar component designed for video player scenarios, supporting gesture drag-and-seek, playback/paused status indications, and custom icons.

## Import

```tsx
import { VideoProgress } from '@nutui/nutui-react'
```

## Demo

### Basic Usage (Static Playback)

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Paused State & Custom Icon

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Gesture Drag & Seek

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## VideoProgress

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | Progress percentage (0-100) | `number` | `0` |
| status | Playback status: `static` playing, `paused` paused | `static` \| `paused` | `static` |
| draggable | Whether thumb can be dragged to adjust progress | `boolean` | `false` |
| showThumb | Whether to show thumb | `boolean` | `true` |
| pausedIcon | Custom icon displayed in thumb center when paused | `ReactNode` | `-` |
| min | Minimum progress value | `number` | `0` |
| max | Maximum progress value | `number` | `100` |
| step | Drag step | `number` | `-` |
| onChange | Callback on progress change (emitted continuously during drag) | `(percent: number) => void` | `-` |
| onDragStart | Callback when dragging starts | `(percent: number) => void` | `-` |
| onDragging | Callback during dragging | `(percent: number) => void` | `-` |
| onDragEnd | Callback when dragging ends | `(percent: number) => void` | `-` |
| ariaLabel | Accessible label | `string` | `-` |

## Theme Customization

### CSS Variables

The component provides the following CSS variables for style customization, please refer to [ConfigProvider Component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-progress-video-track-color | Track background color | `rgba(255, 255, 255, 0.2)` |
| \--nutui-progress-video-fill-color | Filled track color | `rgba(255, 255, 255, 0.7)` |
| \--nutui-progress-video-thumb-color | Thumb color | `#ffffff` |
| \--nutui-progress-video-height | Track height | `1px` |
| \--nutui-progress-video-active-height | Track height when dragging | `8px` |
| \--nutui-progress-video-paused-height | Track height when paused | `3px` |
| \--nutui-progress-video-thumb-width | Thumb width | `2px` |
| \--nutui-progress-video-thumb-height | Thumb height | `1px` |
| \--nutui-progress-video-thumb-radius | Thumb corner radius | `0.5px` |
| \--nutui-progress-video-thumb-active-width | Thumb width when dragging | `6px` |
| \--nutui-progress-video-thumb-active-height | Thumb height when dragging | `12px` |
| \--nutui-progress-video-thumb-active-radius | Thumb corner radius when dragging | `3px` |
| \--nutui-progress-video-thumb-paused-width | Thumb width when paused | `6px` |
| \--nutui-progress-video-thumb-paused-height | Thumb height when paused | `3px` |
| \--nutui-progress-video-thumb-paused-radius | Thumb corner radius when paused | `1.5px` |
| \--nutui-progress-video-opacity-static | Opacity in static state | `0.6` |
| \--nutui-progress-video-opacity-paused | Opacity in paused state | `0.85` |
| \--nutui-progress-video-container-height | Container touch area height | `68px` |
