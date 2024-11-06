# Sticky组件

效果同 css 中的 position: sticky,对低端浏览器可使用其做兼容

## 引入

```tsx
import { Sticky } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 吸顶距离

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 指定容器内吸顶

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 吸底距离

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Sticky

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 吸附位置 | `top` \| `bottom` | `top` |
| threshold | 距离，当 position 为 top 时，设置的是 top | `number` | `0` |
| zIndex | 吸附时的层级 | `number` | `2000` |
| container | 容器的 ref | `React.RefObject<HTMLElement>` | `-` |
| onChange | 吸附状态改变时触发 | `(val: boolean) => void` | `-` |
