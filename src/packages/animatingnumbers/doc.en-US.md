# AnimatingNumbers

Digital animation collection

## Import

```tsx
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## Demo

### AnimatingNumbers.CountUp - Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### AnimatingNumbers.CountUp - Custom styles to dynamically modify data (maximum number of bits required)

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## AnimatingNumbers.CountUp

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| length | Set the maximum display length, the number of bits is not enough, the number of bits before the zero | `number` | `0` |
| value | The end value, | `string` | `number` |
| delay | Wait time for animation execution, in ms | `number` | `300` |
| duration | Animation execution time, in s | `number` | `1` |
| thousands | Whether there are thousands separators | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-countup-width | width of countup item | `auto` |
| \--nutui-countup-height | height of countup item | `32px` |
| \--nutui-countup-base-size | countup font size | `18px` |
| \--nutui-countup-border-radius | border radius of item | `4px` |
| \--nutui-countup-lr-margin | margin of item | `0` |
| \--nutui-countup-bg-color | background color of item | `inherit` |
| \--nutui-countup-color | color of item | `$color-title` |
| \--nutui-countup-separator-color | The font color of the separator | `$color-title` |
