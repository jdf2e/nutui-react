# Rate

Use for quick rating actions, or to showcase reviews.

## Import

```tsx
import { Rate } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled Mode

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Half Star

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Icon

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom Quantity

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Set Minimum Quantity (Support Half Star)

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom Color

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Disabled State

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### ReadOnly State

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### OnChange Event

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Touch to Select

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Touch Event

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Rate

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | Uncontrolled star value | `number` | `0` |
| value | Controlled star value | `number` | `0` |
| count | total number of stars | `number` | `5` |
| min | At least the number of STAR | `number` | `0` |
| uncheckedIcon | Use icon (unchecked) | `ReactNode` | `star-n` |
| checkedIcon | Use icon (checked) | `ReactNode` | `star-n` |
| allowHalf | Half star or not | `boolean` | `false` |
| readOnly | Read only | `boolean` | `false` |
| disabled | Disable or not | `boolean` | `false` |
| touchable | Enable touch to select ｜ `boolean` | `false` |
| onChange | Event triggered when the current score is modified | `(value: number) => void` | `-` |
| onTouchEnd | Event triggered when touch end | `(event: TouchEvent, value: number) => void` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-rate-item-margin | rate item margin | `14px` |
| \--nutui-rate-icon-color | checked icon color | `$color-primary` |
| \--nutui-rate-icon-inactive-color | unchecked icon color | `$color-text-disabled` |
