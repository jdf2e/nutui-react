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

### 自定义文案与图标

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

页面到达底部阈值后触发加载。组件在加载期间会阻止重复触发，并保证加载态至少展示 200ms；`hasMore` 变为 `false` 后展示完成态并自动复位。组件内置了普通态与反白态两套图标（按 `type` 选择）：加载中用 gif 动图，没有更多了用静态图。需要换成其它主题时通过 `renderIcon(status)` 返回任意图片即可（支持 gif 动图）。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 主题类型 | `default`\| `primary` | `default` |
| hasMore | 是否还有更多数据 | `boolean` | `true` |
| threshold | 距离底部多远加载 | `number` | `200` |
| capture | 是否使用捕获模式 true 捕获 false 冒泡 | `boolean` | `false` |
| target | 获取监听的目标元素 | `string` | `-` |
| pullUpText | 待加载状态文案 | `ReactNode` | `上滑更多加载` |
| loadingText | 加载中状态文案 | `ReactNode` | `加载中` |
| loadMoreText | 没有更多数据时的完成态文案 | `ReactNode` | `没有更多了` |
| minimumLoadingTime | 加载态最短展示时长，单位 ms | `number` | `200` |
| renderIcon | 自定义各状态图标，返回任意图片即可替换内置图标（支持 gif 动图） | `(status: 'idle' \| 'loading' \| 'complete') => ReactNode` | 内置图标（加载中为 gif 动图，没有更多了为静态图） |
| iconStyle | 图标容器样式，可通过 `--nutui-infiniteloading-icon-size` 调整图标尺寸 | `CSSProperties` | `-` |
| pullRefresh | 是否开启下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `松手刷新` |
| onRefresh | 下拉刷新事件回调 | `() => Promise<void>` | `-` |
| onLoadMore | 继续加载的回调函数 | `() => Promise<void>` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-infiniteloading-color | 状态文字颜色 | `$color-text` |
| \--nutui-infiniteloading-icon-size | 图标尺寸 | `20px` |

<Contribution name="InfiniteLoading" />
