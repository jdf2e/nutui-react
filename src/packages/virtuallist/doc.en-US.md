# VirtualList

In normal list show and pull-up loading, we usually use the InfiniteLoading component provided by NutUI. If we load a large amount of data, serious performance problems may occur, resulting in the view unable to respond to the operation for a period of time. At this time, we use the virtual list component list, which can ensure that only the current visual area is rendered, Other parts are rendered after the user scrolls to the visible area. Ensure page flow and improve performance.

## Import

```tsx
import { Virtuallist } from '@nutui/nutui-react'
```

## Demo

### Basic usage - vertical height

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Vertical unequal height & infinite slide

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### horizontal width

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Horizontal unequal width & infinite sliding

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## VirtualList

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | source data | `Array` | `-` |
| containerHeight | container height | `number` | `Get the element offsetWidth or offsetHeight, which is given by CSS` |
| itemRender | virtual function rendered by the parent of the list | `(data: any, dataIndex: number, index: number) => ReactNode` | `-` |
| itemHeight | Item height, if not height, the first screen single maximum height | `number` | `66` |
| itemEqual | the sizes of items are consistent | `boolean` | `true` |
| overscan | In addition to the default elements in the viewport, there is an additional number of items to render | `number` | `2` |
| key | the key name of item in list, index as default | `string` | `-` |
| direction | horizontal or vertical | `string` | `vertical` |
| onScroll | scroll to end | `() => void` | `-` |
