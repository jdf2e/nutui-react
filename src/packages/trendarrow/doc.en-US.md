# TrendArrow

A percentage number with an arrow indicating the trend of the indicator

## Import

```tsx
import { TrendArrow } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Change text color

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Specify decimal places

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Arrow ahead

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Show sign

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Show zero or not

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom color

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom icon

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## TrendArrow

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Value, arrow up if greater than zero, arrow down if less than zero | `number` | `-` |
| digits | Decimal precision | `number` | `2` |
| symbol | Whether to display plus and minus signs | `boolean` | `false` |
| zero | Show zero or not | `boolean` | `false` |
| left | Whether to show an arrow to the left of the number | `boolean` | `false` |
| sync | Whether the text color is in sync with the arrow | `boolean` | `true` |
| color | Text color | `string` | `#333333` |
| riseColor | Rise arrow color | `string` | `#fa2c19` |
| dropColor | Down arrow color | `string` | `#64b578` |
| riseIcon | Custom Rise arrow icon | `string` | `<TriangleUp/>` |
| dropIcon | Custom down arrow icon | `string` | `<TriangleDown/>` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | Trend arrow text size | `14px` |
| \--nutui-trendarrow-icon-margin | Trend arrow Specifies the spacing between text and icon | `4px` |
