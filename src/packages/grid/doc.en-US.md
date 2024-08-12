# Grid

Used to separate into equal-width blocks for page navigation.

## Import

```tsx
import { Grid } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Column Num

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Square

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Gap

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Reverse

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Horizontal

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Reverse & Horizontal

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Icon Style

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Custom Content

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Grid Item Click

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Grid

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Column Num | `number` \| `string` | `4` |
| gap | Gap. The default unit is `px` | `number` \| `string` | `0` |
| center | Whether to center content | `boolean` | `true` |
| square | Whether to be square shape | `boolean` | `false` |
| reverse | Whether to reverse the position of icon and text | `boolean` | `false` |
| direction | Content arrangement direction | `horizontal` \| `vertical` | `vertical` |
| onClick | Grid.Item Click Event | `(item: GridItem, index) => void` | `-` |

## Grid.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | text | `string\| ReactNode` | `-` |
| onClick | Grid.Item Click Event | `(event: Event) => void` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-grid-border-color | border color | `#f5f6f7` |
| \--nutui-grid-item-content-padding | padding | `16px 8px` |
| \--nutui-grid-item-content-bg-color | background | `$white` |
| \--nutui-grid-item-text-margin | margin | `8px` |
| \--nutui-grid-item-text-color | text color | `$color-title` |
| \--nutui-grid-item-text-font-size | text font size | `$font-size-small` |
