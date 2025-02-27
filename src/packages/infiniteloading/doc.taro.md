# InfiniteLoading 滚动加载

列表滚动到底部自动加载更多数据。

## 引入

```tsx
import { InfiniteLoading } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 下拉刷新

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义加载文案

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### primary主题

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

## InfiniteLoading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 主题类型 | `default`\| `primary` | `default` |
| hasMore | 是否还有更多数据 | `boolean` | `true` |
| threshold | 距离底部多远加载 | `number` | `200` |
| target | 获取监听的目标元素 | `string` | `-` |
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
| \--nutui-infiniteloading-icon-size | 滑动到底部的文字颜色 | `24px` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20InfiniteLoading)

### Component Logs

- 💡 📖 docs(infiniteloading): remove deprecated usage ([#2801](https://github.com/jdf2e/nutui-react/pull/2801)) `v2.7.2`
- 💡 📖 docs(infiniteLoading): optimize target description ([#2770](https://github.com/jdf2e/nutui-react/pull/2770)) `v2.7.1`
- 🐛 fix(infiniteLoading): rest 导致事件无法触发 ([#2474](https://github.com/jdf2e/nutui-react/pull/2474)) @oasis-cloud `v2.6.15`
- ✨ feat(infiniteLoading): 继承 scrollView 的 props 类型 ([#2441](https://github.com/jdf2e/nutui-react/pull/2441)) @oasis-cloud `v2.6.14`
- 🐛 fix(infiniteLoading): demo拆解与规范+增加joy logo的demo ([#2081](https://github.com/jdf2e/nutui-react/pull/2081)) @irisSong `v2.4.2`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=infiniteloading&expanded=true)
