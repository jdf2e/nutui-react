# InfiniteLoading 滚动加载

列表滚动到底部自动加载更多数据。

## 引入

```tsx
import { InfiniteLoading } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 下拉刷新

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义加载文案

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### primary主题

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 基于window滚动

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## InfiniteLoading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 主题类型 | `default`\| `primary` | `default` |
| hasMore | 是否还有更多数据 | `boolean` | `true` |
| threshold | 距离底部多远加载 | `number` | `200` |
| capture | 是否使用捕获模式 true 捕获 false 冒泡 | `boolean` | `false` |
| target | 用于标识和区分页面中多个组件实例的唯一标识符。注意，这个属性并不是用于监听 DOM 元素，而是用于在同一页面上管理多个组件实例。 | `string` | `-` |
| loadMoreText | “没有更多数据”展示文案 | `string` | `哎呀，这里是底部了啦` |
| pullRefresh | 是否开启下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `松手刷新` |
| loadingText | 上拉加载提示文案 | `ReactNode` | `刷新中` |
| onRefresh | 下拉刷新事件回调 | `() => Promise<void>` | `-` |
| onLoadMore | 继续加载的回调函数 | `() => Promise<void>` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 滑动到底部的文字颜色 | `$color-text-help` |
