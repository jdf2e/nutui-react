# Drag 拖拽

实现可拖拽的任意元素

## 引入

```tsx
import { Drag } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 限制拖拽方向

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自动吸边

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 限制拖拽边界

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Drag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| attract | 是否开启自动吸边 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限制 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽边界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |
| onDragStart | 开始拖拽元素 | `() => void` | `-` |
| onDrag | 拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
| onDragEnd | 停止拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
