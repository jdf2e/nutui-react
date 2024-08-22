# PullToRefresh 下拉刷新

在列表中通过手指下拉刷新加载新内容的交互操作。

## 引入

```tsx
import { PullToRefresh } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

> 在 PullToRefresh 组件内部采用 Selector API 获得父滚动元素的 scrollTop 值会带来下拉卡顿的性能问题。因此需要在 PullRefresh 组件外部判断 scrollTop 值，在页面中使用 usePageScroll() 钩子获得 scrollTop 值，在 ScrollView 组件内监听 onScroll 事件获得 scrollTop 值。

### ScrollView

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 深色背景-反白模式:type='primary'

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

## PullToRefresh

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| canReleaseText | 释放的提示文案 | `ReactNode` | `松手刷新` |
| completeText | 完成时的提示文案 | `ReactNode` | `刷新成功` |
| completeDelay | 完成后延迟消失的时间，单位为 ms | `number` | `500` |
| disabled | 是否禁用下拉刷新 | `boolean` | `false` |
| headHeight | 头部提示内容区的高度，单位为 px | `number` | `40` |
| scrollTop | 可滚动的父元素的 scrollTop | `number` | `0` |
| pullingText | 下拉的提示文案 | `ReactNode` | `下拉刷新` |
| refreshingText | 刷新时的提示文案 | `ReactNode` | `刷新中` |
| renderIcon | 根据下拉状态，自定义下拉提示图标 | `ReactNode` | `<Loading />` |
| renderText | 根据下拉状态，自定义下拉提示文案 | `ReactNode` | `-` |
| threshold | 触发刷新需要下拉多少距离，单位为 px | `number` | `60` |
| onRefresh | 触发刷新时的处理函数 | `() => Promise<any>` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-pulltorefresh-icon-width | 下拉时icon宽度 | `36px` |
| \--nutui-pulltorefresh-icon-height | 下拉时icon高度 | `26px` |
| \--nutui-pulltorefresh-color-primary | 深色背景模式 | `$color-primay` |
