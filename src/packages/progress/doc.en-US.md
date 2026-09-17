# Progress

Used to show the current progress of the operation.

## Import

```tsx
import { Progress } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Show Percentage

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Content

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Custom Size

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Status Display

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Dynamic Change

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Delay Time

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Set animation duration and playback mode

:::demo
<CodeBlock src='h5/demo9.tsx'></CodeBlock>
:::

### Video Progress

For video-player-like immersive scenarios. Default colors: track `rgba(255,255,255,0.1)`, fill `rgba(255,255,255,0.7)`, thumb `#FFFFFF`. The demo covers three states: static (dimmed), paused (medium intensity, paired with a play icon), and drag (highlighted, enlarged thumb).

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Progress

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | percent | `number` | `0` |
| color | Stroke color | `string` | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| background | Progress bar background color | `string` | `#f3f3f3` |
| strokeWidth | Stroke width | `string` | `-` |
| showText | Whether to show text | `boolean` | `false` |
| animated | Whether to show animation | `boolean` | `false` |
| lazy | Show animation when intersect | `boolean` | `false` |
| delay | Delay time to set percent, ms | `number` | `0` |
| borderRadius | Progress bar corner size | `string` | `0` |
| fontSize | Progress text size | `string` | `12px` |
| activeMode | Animation playback mode | `forwards \| backwards` | `forwards` |
| duration | Animation completion time (in milliseconds) | `number` | `30` |
| ariaLabel | AccessibilityLabel | `string` | `-` |
| onActiveEnd | Callback function after animation is completed | `() => void` | `-` |
| mode | Progress bar form; `video` enables the video-player style | `default \| video` | `default` |
| status | External state in video mode (`static` / `paused`); drag state is derived internally | `static \| paused` | `static` |
| draggable | Whether users can drag to seek in video mode | `boolean` | `false` |
| showThumb | Whether the draggable thumb is visible in video mode | `boolean` | `true` |
| pausedIcon | Icon rendered when `status='paused'` | `ReactNode` | `-` |
| min | Minimum progress value | `number` | `0` |
| max | Maximum progress value | `number` | `100` |
| step | Step size for drag / keyboard | `number` | `-` |
| onChange | Fires when the progress value changes | `(value: number) => void` | `-` |
| onDragStart | Fires on drag start | `(value: number) => void` | `-` |
| onDragging | Fires while dragging | `(value: number) => void` | `-` |
| onDragEnd | Fires on drag end | `(value: number) => void` | `-` |

> Note: when `mode='video'`, `color / background / strokeWidth` are ignored. Customize the look via the CSS variables below or via the `pausedIcon` slot.

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-progress-height | strokeWidth | `10px` |
| \--nutui-progress-border-radius | borderRadius | `12px` |
| \--nutui-progress-color | progress color | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| \--nutui-progress-background | progress background | `#f3f3f3` |
| \--nutui-progress-text-color | text color | `$color-text-help` |
| \--nutui-progress-text-padding | text padding | `0 5px` |
| \--nutui-progress-text-font-size | text fontSize | `13px` |
| \--nutui-progress-text-position-top | text top | `-4px` |
| \--nutui-progress-text-position-bottom | text bottom | `-4px` |
| \--nutui-progress-text-border-radius | text borderRadius | `5px` |
| \--nutui-progress-text-background | text background | `$progress-color` |
| \--nutui-progress-video-track-color | video mode track color | `rgba(255, 255, 255, 0.2)` |
| \--nutui-progress-video-fill-color | video mode filled color | `rgba(255, 255, 255, 0.7)` |
| \--nutui-progress-video-thumb-color | video mode thumb color | `#ffffff` |
| \--nutui-progress-video-height | video mode track height | `1px` |
| \--nutui-progress-video-active-height | track height on drag | `8px` |
| \--nutui-progress-video-paused-height | track height in paused state | `3px` |
| \--nutui-progress-video-thumb-width | video mode thumb width | `2px` |
| \--nutui-progress-video-thumb-height | video mode thumb height | `1px` |
| \--nutui-progress-video-thumb-radius | video mode thumb corner radius | `0.5px` |
| \--nutui-progress-video-thumb-active-width | thumb width on drag | `6px` |
| \--nutui-progress-video-thumb-active-height | thumb height on drag | `12px` |
| \--nutui-progress-video-thumb-active-radius | thumb corner radius on drag | `3px` |
| \--nutui-progress-video-thumb-paused-width | thumb width in paused state | `6px` |
| \--nutui-progress-video-thumb-paused-height | thumb height in paused state | `3px` |
| \--nutui-progress-video-thumb-paused-radius | thumb corner radius in paused state | `1.5px` |
| \--nutui-progress-video-opacity-static | opacity in static state | `0.6` |
| \--nutui-progress-video-opacity-paused | opacity in paused state | `0.85` |

<Contribution name="Progress" />
