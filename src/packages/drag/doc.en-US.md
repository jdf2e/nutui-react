# Drag

Implement draggable arbitrary elements.

## Import

```tsx
import { Drag } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Limit Direction

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Attract

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Limit Boundaries

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Drag

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| attract | Whether to enable automatic edge suction | `boolean` | `false` |
| direction | The drag direction limit of the dragged element | `x` \| `y` \| `all` | `all` |
| boundary | The drag boundary of the dragged element | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |
| onDragStart | Start dragging elements | `() => void` | `-` |
| onDrag | Drag element | `(state: { offset: [x: number, y: number] }) => void` | `-` |
| onDragEnd | Stop dragging elements | `(state: { offset: [x: number, y: number] }) => void` | `-` |
