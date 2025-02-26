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

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASticky)

### Component Logs

- 🐛 fix(sticky): should rerender when zIndex changes ([#2572](https://github.com/jdf2e/nutui-react/pull/2572)) `v2.6.18`
- 🐛 fix(sticky): rerender sticky when threshold change ([#2564](https://github.com/jdf2e/nutui-react/pull/2564)) `v2.6.18`
- 🐛 sticky 构建时类型错误 @oasis-cloud `v2.6.15`
- 💡 🪵 refactor: sticky ([#2468](https://github.com/jdf2e/nutui-react/pull/2468)) @oasis-cloud `v2.6.15`
- 🐛 fix(sticky): demo拆解与规范 ([#2024](https://github.com/jdf2e/nutui-react/pull/2024)) @Alex-huxiyang `v2.4.2`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=sticky&expanded=true)
