# Skeleton

Filling gray bitmap in the area to be loaded on the page is essentially the transition effect in the process of interface loading.

## Import

```tsx
import { Skeleton } from '@nutui/nutui-react'
```

## Code demonstration

### Title

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Paragraph

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Mock Avatar

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Heading Paragraph

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Show subcomponents

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Skeleton

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show skeleton screen (true: hide skeleton, false: show skeleton) | `boolean` | `true` |
| animated | Whether to enable skeleton animation | `boolean` | `false` |
| size | Specify the built-in height | `'small' \| 'normal' \| 'large'` | `normal` |
| shape | Set shape | `'square' \| 'round' \| 'circle'` | `round` |
| duration | Animation duration | `number` | `0.6` |
| rows | Set number of rows | `number` | `1` |
| width | Set width, higher priority than `size` property | `string\|number` | `-` |
| height | Set height, higher priority than `size` property | `string\|number` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-skeleton-background | Background | `rgb(239, 239, 239)` |
| \--nutui-skeleton-line-width | Line width | `100%` |
| \--nutui-skeleton-line-small-height | Line height | `16px` |
| \--nutui-skeleton-line-normal-height | Line height | `24px` |
| \--nutui-skeleton-line-large-height | Line height | `32px` |
| \--nutui-skeleton-line-border-radius | Line border radius | `4px` |

<Contribution name="Skeleton" />
