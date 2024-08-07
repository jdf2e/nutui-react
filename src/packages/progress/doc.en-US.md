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

## Progress

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | percent | `number` | `0` |
| color | Stroke color | `string` | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| background | Progress bar background color | `string` | `#f3f3f3` |
| strokeWidth | Stroke width | `string` | `-` |
| showText | Whether to show text | `boolean` | `false` |
| animated | Whether to show animation | `boolean` | `false` |
| lazy | Show animation when intersect | `boolean` | `false` |
| delay | Delay time to set percent, ms | `number` | `0` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-progress-height | strokeWidth | `10px` |
| \--nutui-progress-border-radius | borderRadius | `12px` |
| \--nutui-progress-color | progress color | `linear-gradient(135deg, #fa2c19 0%, #fa6419 100%)` |
| \--nutui-progress-background | progress background | `#f3f3f3` |
| \--nutui-progress-text-color | text color | `$color-primary-text` |
| \--nutui-progress-text-padding | text padding | `0 5px` |
| \--nutui-progress-text-font-size | text fontSize | `9px` |
| \--nutui-progress-text-position-top | text top | `-4px` |
| \--nutui-progress-text-position-bottom | text bottom | `-4px` |
| \--nutui-progress-text-border-radius | text borderRadius | `5px` |
| \--nutui-progress-text-background | text background | `$progress-color` |
