# Skeleton

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

## Import

```tsx
import { Skeleton } from '@nutui/nutui-react'
```

## Code demonstration

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Incoming multiline

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Show Faces

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Title paragraph fillet style

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Display subcomponents

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display skeleton screen | `boolean` | `false` |
| animated | Whether to turn on skeleton screen animation | `boolean` | `false` |
| avatar | Show avatar | `boolean` | `false` |
| avatarShape | Avatar shape: square / round | `string` | `round` |
| avatarSize | Avatar size | `string` | `50px` |
| rows | Set the number of paragraph lines | `number` | `1` |
| title | Show paragraph titles | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-skeleton-background | background | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | line width | `100%` |
| \--nutui-skeleton-line-height | line height | `15px` |
| \--nutui-skeleton-line-border-radius | line borderRadius | `0` |
