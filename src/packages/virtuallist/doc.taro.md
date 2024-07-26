# VirtualList 虚拟列表

在正常的列表展示以及上拉加载中，我们通常使用 NutUI-React 提供的 滚动加载 组件，那如果我们加载的数据量非常大时，则可能会产生严重的性能问题，导致视图无法响应操作一段时间，这时候我们就用到了虚拟列表组件 VirtualList，它可以保证只渲染当前可视区域，其他部分在用户滚动到可视区域内之后再渲染。保证了页面流程度，提升性能。

## 引入

```tsx
import { VirtualList } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法-垂直等高

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 垂直不等高&无限下滑

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

## VirtualList

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 获取数据 | `Array` | `-` |
| containerHeight | 容器高度 | `number` | `获取元素的 offsetWidth 或 offsetHeight，需要 css 给出` |
| itemRender | virtual 列表父节点渲染的函数 | `(data: any, dataIndex: number, index: number) => ReactNode` | `-` |
| itemHeight | item 高度，如果不定高，则为首屏单个最大 height | `number` | `66` |
| itemEqual | item 高度是否一致 | `boolean` | `true` |
| overscan | 除了视窗里面默认的元素, 还需要额外渲染的 item 个数 | `number` | `2` |
| key | 用于指定 list 数据每一项的唯一 key 的字段名，默认取下标 | `string` | `-` |
| onScroll | 滑动到底的事件，可以实现无限滚动 | `() => void` | `-` |
