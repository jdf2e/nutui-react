# Space

Maintain the same width in the arrangement of elements.

## Import

```tsx
import { Space } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Wrap

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Direction

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Gap

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### MainAxis alignment

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### CrossAxis alignment

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Space

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | space direction | `vertical \| horizontal` | `horizontal` |
| align | space align | `start \| end \|center \| baseline` | `-` |
| justify | space justify | `start \| end \| center \| between \| around \| evenly \| stretch` | `-` |
| wrap | space wrap，Only valid when horizontal | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer
to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | spacing size |
