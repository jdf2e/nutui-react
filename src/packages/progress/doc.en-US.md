# Progress

Used to display current progress of an operation or task.

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

### Custom Size

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

### Duration And Animation Mode

:::demo
<CodeBlock src='h5/demo9.tsx'></CodeBlock>
:::

## Progress

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | Percentage | `number` | `0` |
| color | Progress line color | `string` | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| background | Progress background color | `string` | `#f3f3f3` |
| strokeWidth | Progress stroke width | `string` | `-` |
| showText | Whether to display text | `boolean` | `false` |
| animated | Whether to display animation | `boolean` | `false` |
| lazy | Play animation when entering viewport | `boolean` | `false` |
| delay | Delay data loading duration, in ms | `number` | `0` |
| borderRadius | Corner radius | `string` | `0` |
| fontSize | Progress text size | `string` | `12px` |
| activeMode | Animation mode | `forwards \| backwards` | `forwards` |
| duration | Animation completion time (unit: ms) | `number` | `30` |
| ariaLabel | Accessible label | `string` | `-` |
| onActiveEnd | Callback function after animation completes | `() => void` | `-` |

## Theme Customization

### CSS Variables

The component provides the following CSS variables for style customization, please refer to [ConfigProvider Component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-progress-height | Progress bar height | `10px` |
| \--nutui-progress-border-radius | Progress border radius | `12px` |
| \--nutui-progress-color | Progress bar color | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| \--nutui-progress-background | Progress background color | `#f3f3f3` |
| \--nutui-progress-text-color | Text color | `$color-text-help` |
| \--nutui-progress-text-padding | Text padding | `0 5px` |
| \--nutui-progress-text-font-size | Text font size | `13px` |
| \--nutui-progress-text-position-top | Text position top | `-4px` |
| \--nutui-progress-text-position-bottom | Text position bottom | `-4px` |
| \--nutui-progress-text-border-radius | Text border radius | `5px` |
| \--nutui-progress-text-background | Text background color | `$progress-color` |

<Contribution name="Progress" />
