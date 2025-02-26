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

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AVirtualList)

### Component Logs

- 🐛 fix(virtualList): 修复部分场景onScroll不触发 ([#2221](https://github.com/jdf2e/nutui-react/pull/2221)) @Alex-huxiyang `v2.6.4`
- 🐛 fix(virtuallist): demo拆解与规范 ([#2116](https://github.com/jdf2e/nutui-react/pull/2116)) @eiinu `v2.5.0`
- 🐛 fix(virtuallist): 修复 vitrual list 组件 Taro 下获取窗口高度不正确的问题 ([#1993](https://github.com/jdf2e/nutui-react/pull/1993)) @CDog34 `v2.4.0`
- 💡 🐛 fix(virtualList): 等高模式下的抖动处理, 不定高模式快速滑动白屏 ([#1825](https://github.com/jdf2e/nutui-react/pull/1825)) @oasis-cloud `v2.3.4`
- 🐛 virtuallist key at taro ([#1584](https://github.com/jdf2e/nutui-react/pull/1584)) @xiaoyatong `v2.0.24`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=virtuallist&expanded=true)
