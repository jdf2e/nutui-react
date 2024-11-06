# Drag 拖拽

實現可拖拽的任意元素

## 引入

```tsx
import { Drag } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 限製拖拽方向

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自動吸邊

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 限製拖拽邊界

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Drag

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| attract | 是否開啟自動吸邊 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限製 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽邊界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |
| onDragStart | 開始拖拽元素 | `() => void` | `-` |
| onDrag | 拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
| onDragEnd | 停止拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
