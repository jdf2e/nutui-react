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

## Contribution

### Issues

- [Drag 微信小程序运行报错 TypeError: \_a2.getBoundingClientRect is not a function](https://github.com/jdf2e/nutui-react/issues/2738)

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ADrag)

### Component Logs

- ✨ feat(drag): add the ability to support onDrag, onDragStart, onDragEnd callbacks ([#2418](https://github.com/jdf2e/nutui-react/pull/2418)) @Alex-huxiyang `v2.6.13`
- 🐛 解决Drag组件拖拽后会在原地留一个遮挡元素问题+解决weapp/taro-h5多个demo拖拽位置不正确问题 ([#2330](https://github.com/jdf2e/nutui-react/pull/2330)) @irisSong `v2.6.9`
- 🐛 fix(drag): demo拆解与规范 ([#2163](https://github.com/jdf2e/nutui-react/pull/2163)) @eiinu `v2.6.0`
- 🐛 change drag demo radius value of button ([#1701](https://github.com/jdf2e/nutui-react/pull/1701)) @xiaoyatong `v2.3.0`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=drag&expanded=true)
