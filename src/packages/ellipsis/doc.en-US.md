# Ellipsis

isplay space is insufficient, hidden part of the content and "..." Alternative.

## Import

```tsx
import { Ellipsis } from '@nutui/nutui-react'
```

## Demo

### Leading

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Tailing

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Middle

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Multi-line

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Expand & Collapse

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Ellipsis

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Content | `string` | `-` |
| direction | Direction | `start` \| `end` \| `middle` | `end` |
| rows | Rows | `number` | `1` |
| expandText | Expand text | `string` | `-` |
| collapseText | Collapse text | `string` | `-` |
| symbol | Symbol | `string` | `...` |
| lineHeight | the row height of the container | `string` \| `number` | `20` |
| onClick | Emitted when the content is clicked | `() => void` | `-` |
| onChange | Emitted when expand or collapse is clicked | `(type: string) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按钮颜色 | `#3460fa` |
