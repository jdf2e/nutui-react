# Sticky组件

The effect is the same as position: sticky in CSS, which can be used for compatibility with low-end browsers

## Import

```tsx
import { Sticky } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Ceiling distance

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Ceiling in specified container

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Bottom suction distance

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Sticky

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| position | adsorption position | `top` \| `bottom` | `top` |
| threshold | distance, when position is top, set top | `number` | `0` |
| zIndex | The level when snapping | `number` | `2000` |
| container | the container's ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | Triggered when the snap state changes | `(val: boolean) => void` | `-` |
