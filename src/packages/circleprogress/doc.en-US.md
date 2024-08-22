# CricleProgress

Circular progress bar component

## Import

```tsx
import { CircleProgress } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Ring progress bar custom style

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Customize the color of the circular progress bar (support deformation color)

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Ring progress bar custom size

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Ring progress bar custom content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Dynamically change the progress of the circular progress bar

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## CircleProgress

## Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| percent | Progress Rate | `number` \| `string` | `Required, no default value` |
| strokeWidth | Stroke width | `number` \| `string` | `5` |
| radius | radius | `number` \| `string` | `50` |
| color | Progress color, passing object to render gradient | `Record<string, string> \| string` | `#fa2c19` |
| background | Circle track color | `string` | `#d9d9d9` |
| strokeLinecap | Stroke linecap | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | Whether to be clockwise | `boolean` | `true` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-circleprogress-primary-color | The color of the filled part of the circular progress bar | `$color-primary` |
| \--nutui-circleprogress-path-color | The color of the circular progress bar track | `#e5e9f2` |
| \--nutui-circleprogress-text-color | The color of the track content area of ​​the circular progress bar | `$color-title` |
| \--nutui-circleprogress-text-size | The size of the track content area of ​​the circular progress bar | `$font-size-large` |
